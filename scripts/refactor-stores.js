#!/usr/bin/env node

/**
 * Store Refactoring Script
 * This script automatically refactors store implementations to use the factory approach
 * and series-based organization to reduce code duplication.
 */
const fs = require('fs');
const path = require('path');
const util = require('util');
const execSync = require('child_process').execSync;

// Promisify fs functions
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);

// Constants
const BASE_DIR = path.resolve(__dirname, '..');
const STORE_DIR = path.join(BASE_DIR, 'src', 'store', 'model');
const SERIES_DIR = path.join(STORE_DIR, 'series');

// Shared state
const storeFiles = [];
const storeNames = new Set();
const seriesByStore = new Map();

/**
 * Creates a directory if it doesn't exist
 */
async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}

/**
 * Parses a store file to extract store configuration and links
 */
async function parseStoreFile(filePath) {
  const content = await readFile(filePath, 'utf8');
  const storeName = path.basename(filePath, '.ts');
  
  if (storeName === 'store' || 
      storeName === 'index' || 
      storeName.includes('test') ||
      filePath.includes('templates') ||
      filePath.includes('common') ||
      filePath.includes('examples') ||
      filePath.includes('helpers') ||
      filePath.includes('auto-load-series') ||
      filePath.includes('link-validator') ||
      filePath.includes('series-links')) {
    return null;
  }
  
  // Extract store configuration
  let storeCurrency = '$';
  let storeCountry = 'US';
  const currencyMatch = content.match(/currency: ['"]([£$€R$kr.]+)['"]/);
  if (currencyMatch) {
    storeCurrency = currencyMatch[1];
  }
  
  const countryMatch = content.match(/country: ['"]([A-Z]{2})['"]/);
  if (countryMatch) {
    storeCountry = countryMatch[1];
  }
  
  // Extract links
  const links = [];
  
  // Use a line-by-line approach to find link objects
  // First, split the content into lines
  const lines = content.split('\n');
  
  // Variables to track the current link being built
  let inLinkObject = false;
  let currentLinkText = '';
  
  // Iterate through the lines to find and reconstruct link objects
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check if we're starting a new link object
    if (!inLinkObject && trimmedLine.startsWith('{') && 
        (trimmedLine.includes('brand:') || trimmedLine.includes('model:') || 
         trimmedLine.includes('series:') || trimmedLine.includes('url:'))) {
      inLinkObject = true;
      currentLinkText = trimmedLine;
      
      // Handle single-line link objects
      if (trimmedLine.endsWith('},')) {
        inLinkObject = false;
        // Process the complete link object
        processLinkObject(currentLinkText);
        currentLinkText = '';
      }
    }
    // If we're inside a link object, add the current line
    else if (inLinkObject) {
      currentLinkText += ' ' + trimmedLine;
      
      // Check if the link object is complete
      if (trimmedLine.endsWith('},') || trimmedLine === '},' || trimmedLine === '}') {
        inLinkObject = false;
        // Process the complete link object
        processLinkObject(currentLinkText);
        currentLinkText = '';
      }
    }
  }
  
  // Function to process a complete link object string
  function processLinkObject(linkString) {
    // Extract properties using individual regex patterns
    const brandMatch = linkString.match(/brand:\s*['"]([^'"]*)['"]/);
    const modelMatch = linkString.match(/model:\s*['"]([^'"]*)['"]/);
    const seriesMatch = linkString.match(/series:\s*['"]([^'"]*)['"]/);
    const urlMatch = linkString.match(/url:\s*['"]([^'"]*)['"]/);
    const cartUrlMatch = linkString.match(/cartUrl:\s*['"]([^'"]*)['"]/);
    const itemNumberMatch = linkString.match(/itemNumber:\s*['"]([^'"]*)['"]/);
    const priceMatch = linkString.match(/price:\s*(\d+)/);
    
    // Only create a link if we have the required properties
    if (brandMatch && modelMatch && seriesMatch && urlMatch) {
      const link = {
        brand: brandMatch[1],
        model: modelMatch[1],
        series: seriesMatch[1],
        url: urlMatch[1],
        ...(cartUrlMatch ? { cartUrl: cartUrlMatch[1] } : {}),
        ...(itemNumberMatch ? { itemNumber: itemNumberMatch[1] } : {}),
        ...(priceMatch ? { price: parseInt(priceMatch[1], 10) } : {}),
      };
      
      links.push(link);
    }
  }
  
  // Extract label configurations
  let hasCustomLabels = false;
  const labelsMatch = content.match(/labels:\s*{[^}]*}/s);
  let labelsContent = '';
  if (labelsMatch) {
    labelsContent = labelsMatch[0];
    hasCustomLabels = true;
  }
  
  const successStatusCodesMatch = content.match(/successStatusCodes:\s*(\[[^\]]*\])/);
  const backoffStatusCodesMatch = content.match(/backoffStatusCodes:\s*(\[[^\]]*\])/);
  const disableAdBlockerMatch = content.match(/disableAdBlocker:\s*(true|false)/);
  
  storeNames.add(storeName);
  
  return {
    name: storeName,
    country: storeCountry,
    currency: storeCurrency,
    links,
    hasCustomLabels,
    labelsContent,
    successStatusCodes: successStatusCodesMatch ? successStatusCodesMatch[1] : null,
    backoffStatusCodes: backoffStatusCodesMatch ? backoffStatusCodesMatch[1] : null,
    disableAdBlocker: disableAdBlockerMatch ? disableAdBlockerMatch[1] === 'true' : null,
  };
}

/**
 * Organizes links by series
 */
function organizeLinks(storeInfo) {
  const linksBySeries = new Map();
  
  for (const link of storeInfo.links) {
    if (!linksBySeries.has(link.series)) {
      linksBySeries.set(link.series, []);
    }
    linksBySeries.get(link.series).push(link);
  }
  
  return linksBySeries;
}

/**
 * Generates a refactored store file
 */
function generateRefactoredStoreFile(storeInfo) {
  const storeName = storeInfo.name;
  const StoreClassName = storeName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('');
  
  let storeType = 'createStandardStore';
  
  // Determine store type based on currency and other factors
  if (storeInfo.currency === '€') {
    storeType = 'createEuropeanStore';
  } else if (storeName.includes('amazon') || 
             storeName.includes('newegg') || 
             storeName.includes('walmart')) {
    storeType = 'createMarketplaceStore';
  }
  
  let optionalProps = '';
  
  if (storeInfo.successStatusCodes) {
    optionalProps += `  successStatusCodes: ${storeInfo.successStatusCodes},\n`;
  }
  
  if (storeInfo.backoffStatusCodes) {
    optionalProps += `  backoffStatusCodes: ${storeInfo.backoffStatusCodes},\n`;
  }
  
  if (storeInfo.disableAdBlocker !== null) {
    optionalProps += `  disableAdBlocker: ${storeInfo.disableAdBlocker},\n`;
  }
  
  let labelsImport = '';
  let labelsConfig = '';
  
  if (storeInfo.hasCustomLabels) {
    labelsImport = "import {Labels} from './store';\n";
    labelsConfig = `  labels: ${storeInfo.labelsContent.split(':')[1].trim()},\n`;
  }
  
  return `/**
 * Store configuration for ${storeName}
 * Refactored to use factory approach and series-based organization
 */
import {${storeType}} from './common/store-factory';
${labelsImport}
/**
 * ${StoreClassName} store
 */
export const ${StoreClassName} = ${storeType}({
  name: '${storeName}',
  country: '${storeInfo.country}',
  currency: '${storeInfo.currency}',
${labelsConfig}${optionalProps}
});
`;
}

/**
 * Generates a series-specific links file
 */
function generateSeriesLinksFile(storeInfo, series, links) {
  const imports = [
    "import {Link} from '../../store';",
    "import {createLink, createBrandSeriesLinks} from '../../common/link-factory';"
  ];
  
  // Check if we need the founders edition or AMD reference links
  const hasFoundersEdition = links.some(link => 
    link.brand === 'nvidia' && link.model === 'founders edition'
  );
  
  const hasAmdReference = links.some(link => 
    link.brand === 'amd' && link.model.includes('reference')
  );
  
  if (hasFoundersEdition) {
    imports.push("import {createFoundersEditionLinks} from '../../common/link-factory';");
  }
  
  if (hasAmdReference) {
    imports.push("import {createAmdReferenceLinks} from '../../common/link-factory';");
  }
  
  // Group links by brand for easier factory usage
  const linksByBrand = new Map();
  links.forEach(link => {
    // Skip founders edition and AMD reference links
    if ((link.brand === 'nvidia' && link.model === 'founders edition') ||
        (link.brand === 'amd' && link.model.includes('reference'))) {
      return;
    }
    
    const key = link.brand;
    if (!linksByBrand.has(key)) {
      linksByBrand.set(key, []);
    }
    linksByBrand.get(key).push(link);
  });
  
  let content = imports.join('\n') + '\n\n';
  content += `/**
 * Links for ${storeInfo.name} ${series} series
 */
export const links: Link[] = [\n`;
  
  // Add test link if present
  const testLink = links.find(link => link.brand === 'test:brand');
  if (testLink) {
    content += `  // Test link
  createLink({
    brand: 'test:brand',
    model: 'test:model',
    series: 'test:series',
    url: '${testLink.url}',
  }),\n\n`;
  }
  
  // Add NVIDIA Founders Edition links if present
  if (hasFoundersEdition) {
    const feLinks = links.filter(link => 
      link.brand === 'nvidia' && link.model === 'founders edition'
    );
    
    content += `  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('${series}', [\n`;
    
    feLinks.forEach(link => {
      content += `    {\n      url: '${link.url}'`;
      if (link.cartUrl) content += `,\n      cartUrl: '${link.cartUrl}'`;
      if (link.itemNumber) content += `,\n      itemNumber: '${link.itemNumber}'`;
      if (link.price) content += `,\n      price: ${link.price}`;
      content += ',\n    },\n';
    });
    
    content += `  ]),\n\n`;
  }
  
  // Add AMD Reference links if present
  if (hasAmdReference) {
    const amdLinks = links.filter(link => 
      link.brand === 'amd' && link.model.includes('reference')
    );
    
    content += `  // AMD Reference
  ...createAmdReferenceLinks('${series}', [\n`;
    
    amdLinks.forEach(link => {
      content += `    {\n      url: '${link.url}'`;
      if (link.cartUrl) content += `,\n      cartUrl: '${link.cartUrl}'`;
      if (link.itemNumber) content += `,\n      itemNumber: '${link.itemNumber}'`;
      if (link.price) content += `,\n      price: ${link.price}`;
      content += ',\n    },\n';
    });
    
    content += `  ]),\n\n`;
  }
  
  // Add brand-grouped links
  for (const [brand, brandLinks] of linksByBrand.entries()) {
    content += `  // ${brand.charAt(0).toUpperCase() + brand.slice(1)} Cards
  ...createBrandSeriesLinks('${brand}', '${series}', [\n`;
    
    brandLinks.forEach(link => {
      content += `    {\n      model: '${link.model}',\n      url: '${link.url}'`;
      if (link.cartUrl) content += `,\n      cartUrl: '${link.cartUrl}'`;
      if (link.itemNumber) content += `,\n      itemNumber: '${link.itemNumber}'`;
      if (link.price) content += `,\n      price: ${link.price}`;
      content += ',\n    },\n';
    });
    
    content += `  ]),\n\n`;
  }
  
  // If no links were added through factories, add them individually
  if (!hasFoundersEdition && !hasAmdReference && linksByBrand.size === 0) {
    links.forEach(link => {
      content += `  createLink({\n    brand: '${link.brand}',\n    model: '${link.model}',\n    series: '${link.series}',\n    url: '${link.url}'`;
      if (link.cartUrl) content += `,\n    cartUrl: '${link.cartUrl}'`;
      if (link.itemNumber) content += `,\n    itemNumber: '${link.itemNumber}'`;
      if (link.price) content += `,\n    price: ${link.price}`;
      content += ',\n  }),\n';
    });
  }
  
  content += '];';
  return content;
}

/**
 * Main function to refactor all stores
 */
async function refactorStores() {
  try {
    // Scan for store files
    const files = await readdir(STORE_DIR);
    for (const file of files) {
      if (file.endsWith('.ts') && !file.includes('test')) {
        storeFiles.push(path.join(STORE_DIR, file));
      }
    }
    
    console.log(`Found ${storeFiles.length} store files to process`);
    
    // Parse all store files
    for (const file of storeFiles) {
      const storeInfo = await parseStoreFile(file);
      if (storeInfo) {
        console.log(`Processing ${storeInfo.name} (${storeInfo.links.length} links)`);
        
        const linksBySeries = organizeLinks(storeInfo);
        seriesByStore.set(storeInfo.name, linksBySeries);
        
        // Generate refactored store file
        const refactoredContent = generateRefactoredStoreFile(storeInfo);
        
        // Write refactored store file to a temporary location for review
        const outputDir = path.join(STORE_DIR, 'refactored');
        await ensureDir(outputDir);
        await writeFile(path.join(outputDir, `${storeInfo.name}.ts`), refactoredContent);
        
        // Generate series-specific link files
        for (const [series, links] of linksBySeries.entries()) {
          const seriesDir = path.join(SERIES_DIR, series);
          await ensureDir(seriesDir);
          
          const seriesContent = generateSeriesLinksFile(storeInfo, series, links);
          await writeFile(path.join(seriesDir, `${storeInfo.name}.ts`), seriesContent);
        }
      }
    }
    
    console.log('Store refactoring completed!');
    console.log(`Refactored ${storeNames.size} stores`);
    console.log(`Created refactored store files in ${path.join(STORE_DIR, 'refactored')}`);
    console.log('Created series-specific link files in series subdirectories');
    
    console.log('\nTo apply the refactoring:');
    console.log('1. Review the refactored files');
    console.log('2. Move the refactored store files to replace the originals');
    console.log('3. Update src/store/model/index.ts to use the factory approach');
    
  } catch (err) {
    console.error('Error during refactoring:', err);
  }
}

// Execute the refactoring process
refactorStores();