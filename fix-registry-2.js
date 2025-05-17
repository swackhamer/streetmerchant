const fs = require('fs');
const path = require('path');

// Let's create a fresh store registry file using the basic structure
const registryPath = path.join(__dirname, 'src/store/model/store-registry.ts');

// Create the header
const header = `/**
 * Store Registry - Centralized store configuration management
 * 
 * This file implements a data-driven approach to store configuration
 * instead of having separate files for each store. This significantly
 * reduces code duplication and makes maintenance easier.
 */
import {Store} from './store';
import {
  createStandardStore,
  createEuropeanStore,
  createMarketplaceStore,
  StoreFactoryOptions
} from './common/store-factory';

/**
 * Extended options to help with store categorization
 */
export interface ExtendedStoreOptions extends StoreFactoryOptions {
  storeType: 'standard' | 'european' | 'marketplace';
}

/**
 * Central registry of all store configurations
 */
export const storeRegistry: Record<string, ExtendedStoreOptions> = {
  // Registry entries will be added from the conversion script

`;

// Define the helper functions that should be at the end of the file
const helperFunctions = `/**
 * Creates a store instance from the registry
 */
export function createStoreFromRegistry(storeName: string): Store {
  const config = storeRegistry[storeName];
  if (!config) {
    throw new Error(\`Store "\${storeName}" not found in registry\`);
  }
  
  // Choose the correct factory based on store type
  switch (config.storeType) {
    case 'marketplace':
      return createMarketplaceStore(config);
    case 'european':
      return createEuropeanStore(config);
    case 'standard':
    default:
      return createStandardStore(config);
  }
}

/**
 * Gets all store names from the registry
 */
export function getAllStoreNames(): string[] {
  return Object.keys(storeRegistry);
}

/**
 * Gets stores by country
 */
export function getStoresByCountry(country: string): string[] {
  return Object.entries(storeRegistry)
    .filter(([_, config]) => config.country === country)
    .map(([name, _]) => name);
}

/**
 * Creates a store instance with all options but overriding some fields
 */
export function createStoreWithOverrides(
  storeName: string, 
  overrides: Partial<StoreFactoryOptions>
): Store {
  const config = storeRegistry[storeName];
  if (!config) {
    throw new Error(\`Store "\${storeName}" not found in registry\`);
  }
  
  const mergedConfig = {
    ...config,
    ...overrides,
    // Special handling for nested objects like labels
    labels: overrides.labels 
      ? {...config.labels, ...overrides.labels} 
      : config.labels
  };
  
  // Choose the correct factory based on store type
  switch (config.storeType) {
    case 'marketplace':
      return createMarketplaceStore(mergedConfig);
    case 'european':
      return createEuropeanStore(mergedConfig);
    case 'standard':
    default:
      return createStandardStore(mergedConfig);
  }
}`;

// Call our convert-to-registry.js script again to get fresh store entries
const { execSync } = require('child_process');

// Create a temporary directory to store the original files
if (!fs.existsSync(path.join(__dirname, 'temp'))) {
  fs.mkdirSync(path.join(__dirname, 'temp'));
}

// Backup the registry file
fs.copyFileSync(
  path.join(__dirname, 'src/store/model/store-registry.ts'),
  path.join(__dirname, 'temp/store-registry.ts.bak')
);

// Create an empty registry with just the basic structure
fs.writeFileSync(
  path.join(__dirname, 'src/store/model/store-registry.ts'),
  header + '};' + '\n\n' + helperFunctions
);

// Run the convert-to-registry.js script to add entries to the registry
console.log('Running conversion script to populate registry...');
try {
  execSync('node convert-to-registry.js', { stdio: 'inherit' });
  console.log('Conversion completed successfully!');
} catch (error) {
  console.error('Error running conversion script:', error);
  // Restore the original file if something goes wrong
  fs.copyFileSync(
    path.join(__dirname, 'temp/store-registry.ts.bak'),
    path.join(__dirname, 'src/store/model/store-registry.ts')
  );
  console.log('Restored original registry file due to error');
  process.exit(1);
}

console.log('Store registry fixed successfully!');