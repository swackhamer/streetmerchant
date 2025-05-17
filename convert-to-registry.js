/**
 * Script to convert store files to use the registry pattern
 * 
 * This script:
 * 1. Parses all store files to extract their configurations
 * 2. Adds the configurations to the store registry
 * 3. Converts the store files to use the registry pattern
 */

const fs = require('fs');
const path = require('path');

// Get list of stores to convert
const storeListPath = '/tmp/remaining_stores.txt';
const storeList = fs.readFileSync(storeListPath, 'utf8').split('\n').filter(Boolean);

// Registry file path
const registryFilePath = path.join(__dirname, 'src/store/model/store-registry.ts');
let registryFileContent = fs.readFileSync(registryFilePath, 'utf8');

// Updated store registry entries
const newRegistryEntries = [];

// Process each store
storeList.forEach(storeFilePath => {
  try {
    // Read store file content
    const storeContent = fs.readFileSync(storeFilePath, 'utf8');
    
    // Extract store name from file path
    const storeName = path.basename(storeFilePath, '.ts');
    console.log(`Processing ${storeName}...`);
    
    // Extract configuration parameters
    let storeType = 'standard';
    if (storeContent.includes('createEuropeanStore')) {
      storeType = 'european';
    } else if (storeContent.includes('createMarketplaceStore')) {
      storeType = 'marketplace';
    }
    
    // Extract country
    const countryMatch = storeContent.match(/country:\s*['"]([^'"]+)['"]/);
    const country = countryMatch ? countryMatch[1] : 'US';
    
    // Extract currency
    const currencyMatch = storeContent.match(/currency:\s*['"]([^'"]+)['"]/);
    const currency = currencyMatch ? currencyMatch[1] : '$';
    
    // Extract labels (this is the most complex part)
    const labelsStartIndex = storeContent.indexOf('labels:');
    let labelsEndIndex = storeContent.indexOf('},', labelsStartIndex);
    
    // Find the real end of the labels object by counting braces
    if (labelsStartIndex !== -1) {
      let braceCount = 1;
      let i = storeContent.indexOf('{', labelsStartIndex);
      
      while (braceCount > 0 && i < storeContent.length) {
        i++;
        if (storeContent[i] === '{') {
          braceCount++;
        } else if (storeContent[i] === '}') {
          braceCount--;
          if (braceCount === 0) {
            labelsEndIndex = i;
            break;
          }
        }
      }
    }
    
    let labels = '{}';
    if (labelsStartIndex !== -1 && labelsEndIndex !== -1) {
      const startPos = storeContent.indexOf('{', labelsStartIndex);
      labels = storeContent.substring(startPos, labelsEndIndex + 1);
    }
    
    // Check for additional properties
    const additionalProps = [];
    
    const backoffStatusCodesMatch = storeContent.match(/backoffStatusCodes:([^,]+),/);
    if (backoffStatusCodesMatch) {
      additionalProps.push(`    backoffStatusCodes: ${backoffStatusCodesMatch[1].trim()}`);
    }
    
    const successStatusCodesMatch = storeContent.match(/successStatusCodes:([^,]+),/);
    if (successStatusCodesMatch) {
      additionalProps.push(`    successStatusCodes: ${successStatusCodesMatch[1].trim()}`);
    }
    
    const disableAdBlockerMatch = storeContent.match(/disableAdBlocker:\s*(true|false)/);
    if (disableAdBlockerMatch) {
      additionalProps.push(`    disableAdBlocker: ${disableAdBlockerMatch[1].trim()}`);
    }
    
    // Create registry entry
    const registryEntry = `
  '${storeName}': {
    name: '${storeName}',
    country: '${country}',
    currency: '${currency}',
    storeType: '${storeType}',
    labels: ${labels}${additionalProps.length > 0 ? ',' : ''}
${additionalProps.join(',\n')}
  },`;
    
    newRegistryEntries.push(registryEntry);
    
    // Convert store file to use registry pattern
    const newStoreContent = `/**
 * Store configuration for ${storeName}
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * ${storeName.charAt(0).toUpperCase() + storeName.slice(1)} store
 */
export const ${storeName.charAt(0).toUpperCase() + storeName.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())} = createStoreFromRegistry('${storeName}');
`;
    
    // Write updated store file
    fs.writeFileSync(storeFilePath, newStoreContent, 'utf8');
    console.log(`Converted ${storeName}`);
    
  } catch (error) {
    console.error(`Error processing ${storeFilePath}:`, error);
  }
});

// Update registry file with new entries
const registryEnd = "  // Additional stores can be added here...";
registryFileContent = registryFileContent.replace(registryEnd, newRegistryEntries.join('\n') + '\n\n  // Additional stores can be added here...');

// Write updated registry file
fs.writeFileSync(registryFilePath, registryFileContent, 'utf8');
console.log(`Updated registry with ${newRegistryEntries.length} new entries`);

console.log('Conversion completed!');