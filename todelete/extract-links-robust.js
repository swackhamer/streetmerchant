/**
 * Robust script to extract product links from series files to the centralized data store
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Helper function to ensure directory exists
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Define paths
const srcRoot = path.join(__dirname, 'src');
const seriesDir = path.join(srcRoot, 'store', 'model', 'series');
const seriesDataFile = path.join(srcRoot, 'store', 'model', 'series-data.ts');
const backupDir = path.join(__dirname, 'backup');

// Create a backup folder with timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupPath = path.join(backupDir, `series-data-${timestamp}.ts`);
ensureDirExists(backupDir);

// Backup the current series-data file
if (fs.existsSync(seriesDataFile)) {
  fs.copyFileSync(seriesDataFile, backupPath);
  console.log(`Backed up current series-data.ts to ${backupPath}`);
}

// Parse createFoundersEditionLinks call
function parseFoundersEditionLinks(seriesName, configsArray) {
  const links = [];
  
  // Process the array of config objects
  // The format is typically like:
  // [{ url: '...', cartUrl: '...' }, { url: '...', cartUrl: '...' }]
  
  // Extract individual config objects
  const configObjects = [];
  let currentConfig = '';
  let braceCount = 0;
  
  for (const char of configsArray) {
    currentConfig += char;
    
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      
      if (braceCount === 0) {
        // We've found a complete config object
        configObjects.push(currentConfig.trim());
        currentConfig = '';
      }
    }
  }
  
  // Process each config object
  for (const configText of configObjects) {
    // Skip empty configs
    if (!configText || !configText.includes('{')) {
      continue;
    }
    
    // Extract url and cartUrl
    const urlMatch = configText.match(/url:\s*['"]([^'"]+)['"]/);
    const cartUrlMatch = configText.match(/cartUrl:\s*['"]([^'"]+)['"]/);
    const priceMatch = configText.match(/price:\s*(\d+)/);
    const itemNumberMatch = configText.match(/itemNumber:\s*['"]([^'"]+)['"]/);
    
    if (urlMatch) {
      const link = {
        brand: 'nvidia',
        model: 'founders edition',
        series: seriesName,
        url: urlMatch[1],
      };
      
      if (cartUrlMatch) {
        link.cartUrl = cartUrlMatch[1];
      }
      
      if (priceMatch) {
        link.price = Number(priceMatch[1]);
      }
      
      if (itemNumberMatch) {
        link.itemNumber = itemNumberMatch[1];
      }
      
      links.push(link);
    }
  }
  
  return links;
}

// Parse createBrandSeriesLinks call
function parseBrandSeriesLinks(brand, seriesName, configsArray) {
  const links = [];
  
  // Extract individual config objects
  const configObjects = [];
  let currentConfig = '';
  let braceCount = 0;
  
  for (const char of configsArray) {
    currentConfig += char;
    
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      
      if (braceCount === 0) {
        // We've found a complete config object
        configObjects.push(currentConfig.trim());
        currentConfig = '';
      }
    }
  }
  
  // Process each config object
  for (const configText of configObjects) {
    // Skip empty configs
    if (!configText || !configText.includes('{')) {
      continue;
    }
    
    // Extract model, url, cartUrl, etc.
    const modelMatch = configText.match(/model:\s*['"]([^'"]+)['"]/);
    const urlMatch = configText.match(/url:\s*['"]([^'"]+)['"]/);
    const cartUrlMatch = configText.match(/cartUrl:\s*['"]([^'"]+)['"]/);
    const priceMatch = configText.match(/price:\s*(\d+)/);
    const itemNumberMatch = configText.match(/itemNumber:\s*['"]([^'"]+)['"]/);
    
    if (urlMatch) {
      const link = {
        brand: brand,
        model: modelMatch ? modelMatch[1] : 'default',
        series: seriesName,
        url: urlMatch[1],
      };
      
      if (cartUrlMatch) {
        link.cartUrl = cartUrlMatch[1];
      }
      
      if (priceMatch) {
        link.price = Number(priceMatch[1]);
      }
      
      if (itemNumberMatch) {
        link.itemNumber = itemNumberMatch[1];
      }
      
      links.push(link);
    }
  }
  
  return links;
}

// Get all series folders
const seriesList = fs.readdirSync(seriesDir)
  .filter(item => {
    const itemPath = path.join(seriesDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'common';
  });

console.log(`Found ${seriesList.length} series folders`);

// Create a data object for storing links
let seriesData = {};

// Process each series
for (const series of seriesList) {
  if (series === 'series-names') {
    continue; // Skip the series-names file
  }
  
  console.log(`Processing series: ${series}`);
  const seriesPath = path.join(seriesDir, series);
  
  // Get all store files in this series folder
  const storeFiles = fs.readdirSync(seriesPath)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');
  
  console.log(`  Found ${storeFiles.length} store files`);
  
  // Process each store file
  for (const storeFile of storeFiles) {
    const storeName = path.basename(storeFile, '.ts');
    
    // Read the file content
    const filePath = path.join(seriesPath, storeFile);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract links by parsing the TypeScript content
    let links = [];
    
    try {
      // Look for "export const links: Link[] = [" or similar pattern
      const linksMatch = fileContent.match(/export\s+const\s+links[^=]*=\s*\[([\s\S]*?)\];/);
      
      if (linksMatch && linksMatch[1]) {
        const linksContent = linksMatch[1];
        
        // Check for createFoundersEditionLinks calls
        const foundersEditionMatches = linksContent.matchAll(/\.\.\.createFoundersEditionLinks\(\s*['"]([^'"]+)['"]\s*,\s*(\[[^]*?\])\s*\)/g);
        
        for (const match of foundersEditionMatches) {
          const seriesValue = match[1];
          const configsArray = match[2];
          
          const parsedLinks = parseFoundersEditionLinks(seriesValue, configsArray);
          links = links.concat(parsedLinks);
        }
        
        // Check for createBrandSeriesLinks calls
        const brandSeriesMatches = linksContent.matchAll(/\.\.\.createBrandSeriesLinks\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*(\[[^]*?\])\s*\)/g);
        
        for (const match of brandSeriesMatches) {
          const brand = match[1];
          const seriesValue = match[2];
          const configsArray = match[3];
          
          const parsedLinks = parseBrandSeriesLinks(brand, seriesValue, configsArray);
          links = links.concat(parsedLinks);
        }
        
        // Check for createAmdReferenceLinks calls
        const amdReferenceMatches = linksContent.matchAll(/\.\.\.createAmdReferenceLinks\(\s*['"]([^'"]+)['"]\s*,\s*(\[[^]*?\])\s*\)/g);
        
        for (const match of amdReferenceMatches) {
          const seriesValue = match[1];
          const configsArray = match[2];
          
          // Similar to founders edition, but with AMD brand
          const parsedLinks = parseFoundersEditionLinks(seriesValue, configsArray).map(link => {
            link.brand = 'amd';
            link.model = 'amd reference';
            return link;
          });
          
          links = links.concat(parsedLinks);
        }
        
        // Check for direct createLink calls
        const createLinkMatches = linksContent.matchAll(/createLink\(\s*{([^}]*)}\s*\)/g);
        
        for (const match of createLinkMatches) {
          const linkText = match[1];
          
          // Extract properties
          const brandMatch = linkText.match(/brand:\s*['"]([^'"]+)['"]/);
          const modelMatch = linkText.match(/model:\s*['"]([^'"]+)['"]/);
          const seriesMatch = linkText.match(/series:\s*['"]([^'"]+)['"]/);
          const urlMatch = linkText.match(/url:\s*['"]([^'"]+)['"]/);
          const cartUrlMatch = linkText.match(/cartUrl:\s*['"]([^'"]+)['"]/);
          const priceMatch = linkText.match(/price:\s*(\d+)/);
          const itemNumberMatch = linkText.match(/itemNumber:\s*['"]([^'"]+)['"]/);
          
          if (brandMatch && modelMatch && seriesMatch && urlMatch) {
            const link = {
              brand: brandMatch[1],
              model: modelMatch[1],
              series: seriesMatch[1],
              url: urlMatch[1],
            };
            
            if (cartUrlMatch) {
              link.cartUrl = cartUrlMatch[1];
            }
            
            if (priceMatch) {
              link.price = Number(priceMatch[1]);
            }
            
            if (itemNumberMatch) {
              link.itemNumber = itemNumberMatch[1];
            }
            
            links.push(link);
          }
        }
      }
      
      // Add links to the data structure if we found any
      if (links.length > 0) {
        if (!seriesData[series]) {
          seriesData[series] = {};
        }
        
        seriesData[series][storeName] = links;
        console.log(`  Processing store: ${storeName} - Added ${links.length} links`);
      } else {
        console.log(`  Processing store: ${storeName} - No links found`);
      }
      
    } catch (error) {
      console.error(`  Error processing ${storeName}:`, error.message);
    }
  }
}

// Generate the series-data.ts file
let output = `/**
 * Series Data - Centralized data storage for product links
 * 
 * This file provides a data-driven approach to storing product links
 * organized by series and store, rather than having separate files for each.
 */
import {Link, Series, Brand, Model} from './store';
import {config} from '../../config';

/**
 * Type definition for series data structure
 * Organized as: series -> store -> links
 */
export type SeriesData = {
  [key in Series]?: {
    [storeName: string]: Link[];
  };
};

/**
 * Central repository for product links organized by series and store
 */
export const seriesData: SeriesData = ${JSON.stringify(seriesData, null, 2)
    .replace(/"brand":/g, 'brand:')
    .replace(/"model":/g, 'model:')
    .replace(/"series":/g, 'series:')
    .replace(/"url":/g, 'url:')
    .replace(/"cartUrl":/g, 'cartUrl:')
    .replace(/"price":/g, 'price:')
    .replace(/"itemNumber":/g, 'itemNumber:')
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'")
};

/**
 * Gets links for a specific series and store
 */
export function getLinksForSeriesAndStore(
  series: Series,
  storeName: string
): Link[] {
  if (!seriesData[series]) {
    return [];
  }
  
  return seriesData[series]?.[storeName] || [];
}

/**
 * Helper function to retrieve all links for a specific series
 */
export function getAllLinksForSeries(series: Series): {[store: string]: Link[]} {
  return seriesData[series] || {};
}

/**
 * Helper function to get all available series
 */
export function getAllSeries(): Series[] {
  return Object.keys(seriesData) as Series[];
}

/**
 * Gets all links for a store from the centralized data by series
 */
export function getStoreSeriesLinksFromData(
  storeName: string
): Link[] {
  const links: Link[] = [];

  // Iterate through all series in the centralized data
  for (const series of getAllSeries()) {
    if (config.store.showOnlySeries.length > 0 && !config.store.showOnlySeries.includes(series as Series)) {
      continue;
    }
    
    // Get links for this store and series
    const seriesLinks = getLinksForSeriesAndStore(series as Series, storeName);
    if (seriesLinks.length > 0) {
      links.push(...seriesLinks);
    }
  }

  return links;
}

/**
 * Gets all series names from data
 */
export function getAllSeriesNamesFromData(): Series[] {
  return getAllSeries();
}

/**
 * Filters links from series data based on config
 */
export function filterSeriesDataLinks(links: Link[]): Link[] {
  return links.filter(link => {
    // Filter by series
    if (config.store.showOnlySeries.length > 0 && !config.store.showOnlySeries.includes(link.series)) {
      return false;
    }
    
    // Filter by brand
    if (config.store.showOnlyBrands.length > 0 && !config.store.showOnlyBrands.includes(link.brand)) {
      return false;
    }
    
    // Filter by model is more complex and handled separately
    // This is a simplified version that matches the pattern in store/filter.ts
    if (config.store.showOnlyModels.length > 0) {
      const sanitizedModel = link.model.replace(/\\s/g, '');
      const sanitizedSeries = link.series.replace(/\\s/g, '');
      
      for (const configModelEntry of config.store.showOnlyModels) {
        const sanitizedConfigModel = configModelEntry.name.replace(/\\s/g, '');
        const sanitizedConfigSeries = configModelEntry.series.replace(/\\s/g, '');
        
        if (sanitizedConfigSeries) {
          if (
            sanitizedSeries === sanitizedConfigSeries &&
            sanitizedModel === sanitizedConfigModel
          ) {
            return true;
          }
        } else if (sanitizedModel === sanitizedConfigModel) {
          return true;
        }
      }
      return false;
    }
    
    return true;
  });
}`;

// Save the generated file
const tmpPath = path.join('/tmp', 'series-data.ts');
fs.writeFileSync(tmpPath, output);

// Get the total number of series and links
const seriesCount = Object.keys(seriesData).length;
let totalLinks = 0;
let storeCount = 0;

for (const series in seriesData) {
  const stores = Object.keys(seriesData[series]);
  storeCount += stores.length;
  
  for (const store of stores) {
    totalLinks += seriesData[series][store].length;
  }
}

console.log(`\nExtraction complete!`);
console.log(`Found ${totalLinks} links across ${seriesCount} series and ${storeCount} store files`);
console.log(`Generated file saved to ${tmpPath}`);
console.log(`\nIMPORTANT: Review the generated file before using it to replace the original series-data.ts`);
console.log(`To replace the original file, run:\n  cp ${tmpPath} ${seriesDataFile}`);