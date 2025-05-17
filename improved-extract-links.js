/**
 * Improved script to extract product links from series files to the centralized data store
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
  console.log(`Processing series: ${series}`);
  const seriesPath = path.join(seriesDir, series);
  
  // Get all store files in this series folder
  const storeFiles = fs.readdirSync(seriesPath)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');
  
  // Process each store file
  for (const storeFile of storeFiles) {
    const storeName = path.basename(storeFile, '.ts');
    console.log(`  Processing store: ${storeName}`);
    
    // Read the file content
    const filePath = path.join(seriesPath, storeFile);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract links by parsing the TypeScript content
    let links = [];
    
    try {
      // This is a simplified approach - in a real implementation you'd use a TypeScript parser
      // But for our purposes, let's do pattern matching since the files follow a consistent format
      
      // Look for "export const links: Link[] = [" or similar pattern
      const linksMatch = fileContent.match(/export\s+const\s+links[^=]*=\s*\[([\s\S]*?)\];/);
      
      if (linksMatch && linksMatch[1]) {
        const linksContent = linksMatch[1];
        
        // Check for spread operators that use factories
        const factoryMatches = linksContent.matchAll(/\.\.\.create(\w+)Links\([^)]*'([^']+)'[^)]*'([^']+)'[^)]*\[([\s\S]*?)\]\)/g);
        
        for (const match of factoryMatches) {
          const factoryType = match[1]; // e.g., "BrandSeries", "FoundersEdition"
          const brand = match[2];       // e.g., "nvidia", "evga"
          const seriesValue = match[3]; // e.g., "3070", "3060ti"
          const configsText = match[4]; // The array of config objects
          
          // Parse each config object
          const configBlocks = configsText.split(/{[^}]*},/);
          
          for (const block of configBlocks) {
            if (!block.trim()) continue;
            
            // Extract model, url, and other properties
            const modelMatch = block.match(/model:\s*'([^']+)'/);
            const urlMatch = block.match(/url:\s*'([^']+)'/);
            const cartUrlMatch = block.match(/cartUrl:\s*'([^']+)'/);
            const priceMatch = block.match(/price:\s*(\d+)/);
            const itemNumberMatch = block.match(/itemNumber:\s*'([^']+)'/);
            
            if (urlMatch) {
              // Determine the model based on factory type
              const model = modelMatch ? modelMatch[1] : 
                            factoryType === 'FoundersEdition' ? 'founders edition' :
                            factoryType === 'AmdReference' ? 'amd reference' : 'unknown';
              
              // Create a link object
              const link = {
                brand: brand,
                model: model,
                series: seriesValue,
                url: urlMatch[1],
                ...(cartUrlMatch ? { cartUrl: cartUrlMatch[1] } : {}),
                ...(priceMatch ? { price: Number(priceMatch[1]) } : {}),
                ...(itemNumberMatch ? { itemNumber: itemNumberMatch[1] } : {})
              };
              
              links.push(link);
            }
          }
        }
        
        // Also look for direct createLink calls
        const directLinkMatches = linksContent.matchAll(/createLink\(\s*{([^}]*)}\s*\)/g);
        
        for (const match of directLinkMatches) {
          const linkText = match[1];
          
          // Extract properties
          const brandMatch = linkText.match(/brand:\s*'([^']+)'/);
          const modelMatch = linkText.match(/model:\s*'([^']+)'/);
          const seriesMatch = linkText.match(/series:\s*'([^']+)'/);
          const urlMatch = linkText.match(/url:\s*'([^']+)'/);
          const cartUrlMatch = linkText.match(/cartUrl:\s*'([^']+)'/);
          const priceMatch = linkText.match(/price:\s*(\d+)/);
          const itemNumberMatch = linkText.match(/itemNumber:\s*'([^']+)'/);
          
          if (brandMatch && modelMatch && seriesMatch && urlMatch) {
            const link = {
              brand: brandMatch[1],
              model: modelMatch[1],
              series: seriesMatch[1],
              url: urlMatch[1],
              ...(cartUrlMatch ? { cartUrl: cartUrlMatch[1] } : {}),
              ...(priceMatch ? { price: Number(priceMatch[1]) } : {}),
              ...(itemNumberMatch ? { itemNumber: itemNumberMatch[1] } : {})
            };
            
            links.push(link);
          }
        }
      }
      
      // Add links to the data structure
      if (links.length > 0) {
        if (!seriesData[series]) {
          seriesData[series] = {};
        }
        
        if (!seriesData[series][storeName]) {
          seriesData[series][storeName] = [];
        }
        
        seriesData[series][storeName] = links;
        console.log(`    Added ${links.length} links`);
      } else {
        console.log(`    No links found`);
      }
      
    } catch (error) {
      console.error(`    Error processing ${storeName}:`, error.message);
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