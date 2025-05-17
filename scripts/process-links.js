#!/usr/bin/env node

/**
 * Link Processing Script
 * This script processes extracted links and organizes them by series
 */
const fs = require('fs');
const path = require('path');
const util = require('util');

// Promisify fs functions
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);
const readdir = util.promisify(fs.readdir);

// Constants
const BASE_DIR = path.resolve(__dirname, '..');
const STORE_DIR = path.join(BASE_DIR, 'src', 'store', 'model');
const SERIES_DIR = path.join(STORE_DIR, 'series');
const EXTRACTED_DIR = path.join(STORE_DIR, 'extracted-links');
const REFACTORED_DIR = path.join(STORE_DIR, 'refactored');

// Shared state
const storeInfo = new Map();

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
 * Extracts series and properties from link text
 */
function parseLinks(linkText) {
  const links = [];
  const linkRegex = /{\s*(?:brand|model|series|url|cartUrl|itemNumber|price)[^}]*}/g;
  
  const linkMatches = linkText.match(linkRegex);
  if (!linkMatches) return links;
  
  for (const linkMatch of linkMatches) {
    const brandMatch = linkMatch.match(/brand:\s*['"]([^'"]*)['"]/);
    const modelMatch = linkMatch.match(/model:\s*['"]([^'"]*)['"]/);
    const seriesMatch = linkMatch.match(/series:\s*['"]([^'"]*)['"]/);
    const urlMatch = linkMatch.match(/url:\s*['"]([^'"]*)['"]/);
    const cartUrlMatch = linkMatch.match(/cartUrl:\s*['"]([^'"]*)['"]/);
    const itemNumberMatch = linkMatch.match(/itemNumber:\s*['"]([^'"]*)['"]/);
    const priceMatch = linkMatch.match(/price:\s*(\d+)/);
    
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
  
  return links;
}

/**
 * Reads and parses store information (currency, country, etc.)
 */
async function readStoreInfo(storeName) {
  try {
    const filePath = path.join(STORE_DIR, `${storeName}.ts`);
    const content = await readFile(filePath, 'utf8');
    
    let currency = '$';
    let country = 'US';
    
    const currencyMatch = content.match(/currency: ['"]([£$€R$kr.]+)['"]/);
    if (currencyMatch) {
      currency = currencyMatch[1];
    }
    
    const countryMatch = content.match(/country: ['"]([A-Z]{2})['"]/);
    if (countryMatch) {
      country = countryMatch[1];
    }
    
    // Extract label configurations
    let labelsContent = '';
    // Match multi-line labels section with nested braces
    const labelsMatch = content.match(/labels:\s*{(?:[^{}]|{[^{}]*})*}/gs);
    if (labelsMatch) {
      labelsContent = labelsMatch[0];
    }
    
    const successStatusCodesMatch = content.match(/successStatusCodes:\s*(\[[^\]]*\])/);
    const backoffStatusCodesMatch = content.match(/backoffStatusCodes:\s*(\[[^\]]*\])/);
    const disableAdBlockerMatch = content.match(/disableAdBlocker:\s*(true|false)/);
    
    return {
      name: storeName,
      currency,
      country,
      labelsContent,
      successStatusCodes: successStatusCodesMatch ? successStatusCodesMatch[1] : null,
      backoffStatusCodes: backoffStatusCodesMatch ? backoffStatusCodesMatch[1] : null,
      disableAdBlocker: disableAdBlockerMatch ? disableAdBlockerMatch[1] === 'true' : null,
      hasCustomLabels: !!labelsMatch,
    };
  } catch (error) {
    console.error(`Error reading store info for ${storeName}:`, error);
    return {
      name: storeName,
      currency: '$',
      country: 'US',
      hasCustomLabels: false,
    };
  }
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
    labelsImport = "import {Labels} from '../store';\n";
    // Extract just the labels object content, not the property name
    labelsConfig = `  ${storeInfo.labelsContent},\n`;
  }
  
  return `/**
 * Store configuration for ${storeName}
 * Refactored to use factory approach and series-based organization
 */
import {${storeType}} from '../common/store-factory';
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
    "import {Link} from '../../../store';",
    "import {createLink, createBrandSeriesLinks} from '../../../common/link-factory';"
  ];
  
  // Check if we need the founders edition or AMD reference links
  const hasFoundersEdition = links.some(link => 
    link.brand === 'nvidia' && link.model === 'founders edition'
  );
  
  const hasAmdReference = links.some(link => 
    link.brand === 'amd' && link.model.includes('reference')
  );
  
  if (hasFoundersEdition) {
    imports.push("import {createFoundersEditionLinks} from '../../../common/link-factory';");
  }
  
  if (hasAmdReference) {
    imports.push("import {createAmdReferenceLinks} from '../../../common/link-factory';");
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
 * Main function to process links and create refactored files
 */
async function processExtractedLinks() {
  try {
    // Ensure output directories exist
    await ensureDir(REFACTORED_DIR);
    await ensureDir(SERIES_DIR);
    
    // Get all extracted link files
    const files = await readdir(EXTRACTED_DIR);
    
    console.log(`Found ${files.length} extracted link files to process`);
    
    // Process each file
    for (const file of files) {
      if (!file.endsWith('-links.txt')) continue;
      
      const storeName = file.replace('-links.txt', '');
      const linkFilePath = path.join(EXTRACTED_DIR, file);
      
      console.log(`Processing ${storeName}...`);
      
      // Read the links text
      const linkText = await readFile(linkFilePath, 'utf8');
      
      // Parse links
      const links = parseLinks(linkText);
      console.log(`  Parsed ${links.length} links`);
      
      // Get store information
      const store = await readStoreInfo(storeName);
      
      // Organize links by series
      const linksBySeries = new Map();
      for (const link of links) {
        const series = link.series;
        if (!linksBySeries.has(series)) {
          linksBySeries.set(series, []);
        }
        linksBySeries.get(series).push(link);
      }
      
      console.log(`  Found ${linksBySeries.size} different series`);
      
      // Generate refactored store file
      const refactoredContent = generateRefactoredStoreFile(store);
      await writeFile(path.join(REFACTORED_DIR, `${storeName}.ts`), refactoredContent);
      
      // Generate series-specific link files
      for (const [series, seriesLinks] of linksBySeries.entries()) {
        const seriesDir = path.join(SERIES_DIR, series);
        await ensureDir(seriesDir);
        
        const seriesContent = generateSeriesLinksFile(store, series, seriesLinks);
        await writeFile(path.join(seriesDir, `${storeName}.ts`), seriesContent);
        
        console.log(`  Created series file for ${series} with ${seriesLinks.length} links`);
      }
    }
    
    console.log('Link processing completed!');
    console.log(`Generated refactored store files in ${REFACTORED_DIR}`);
    console.log(`Generated series-specific link files in ${SERIES_DIR}`);
    
    console.log('\nNext steps:');
    console.log('1. Review the refactored files');
    console.log('2. Move the refactored store files to replace the originals');
    console.log('3. Update src/store/model/index.ts to use the factory approach');
    
  } catch (err) {
    console.error('Error during processing:', err);
  }
}

// Execute the processing
processExtractedLinks();