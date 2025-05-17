import {config, defaultStoreData} from '../../config';
import chalk from 'chalk';

// Import core
import {Store} from './store';
import {clearLinkCache} from './series-links';
import {logger} from '../../logger';
import {initializeSeriesLinksLoader} from './auto-load-series';

// Import factory utilities
import './common/store-factory';
import './common/link-factory';
import './common/label-sets';

// Import the store registry
import {storeRegistry, createStoreFromRegistry} from './store-registry';

// Sample store using series links (for testing only)
import {SampleStoreSeries} from './sample-store-series';

// Map to hold store instances
const storeList = new Map<string, Store>();

// Add the sample store for testing/development
storeList.set(SampleStoreSeries.name, SampleStoreSeries);

// Export the storeList for web interface
export {storeList};

// Function to load all stores from the registry
function loadAllStoresFromRegistry() {
  for (const storeName of Object.keys(storeRegistry)) {
    try {
      const store = createStoreFromRegistry(storeName);
      storeList.set(storeName, store);
      logger.debug(`Loaded store from registry: ${storeName}`);
      
      // Initialize series links loader for each store
      initializeSeriesLinksLoader(store);
    } catch (error) {
      logger.error(`Error loading store from registry: ${storeName}`, error);
    }
  }
}

// Function to dynamically discover and load stores from files
// This is a fallback approach for stores not in registry
function discoverAndLoadRemainingStores() {
  const fs = require('fs');
  const path = require('path');
  
  // List all store files in the directory
  const storeFiles = fs.readdirSync(__dirname)
    .filter((file: string) => file.endsWith('.ts'))
    .filter((file: string) => {
      // Exclude utility files, non-store files, and stores already loaded from registry
      return !file.includes('store.ts') &&
             !file.includes('index.ts') &&
             !file.includes('sample-') &&
             !file.includes('series-') &&
             !file.includes('auto-load-') &&
             !file.includes('link-validator') &&
             !file.includes('store-registry') &&
             !file.includes('timestamp-') &&
             !storeRegistry[file.replace('.ts', '')];
    });

  for (const file of storeFiles) {
    try {
      // Convert from filename to PascalCase store name
      const storeName = file.replace('.ts', '');
      const pascalStoreName = storeName
        .split('-')
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      
      // Skip if store is already loaded from registry
      if (storeList.has(storeName)) {
        continue;
      }
      
      // Dynamic require the module
      const storeModule = require(`./${storeName}`);
      
      // Check if the store export exists
      if (storeModule[pascalStoreName]) {
        storeList.set(storeName, storeModule[pascalStoreName]);
        
        // Initialize series links loader
        initializeSeriesLinksLoader(storeModule[pascalStoreName]);
        
        logger.debug(`Loaded store from file: ${storeName}`);
      } else {
        logger.debug(`Store module found but no export named ${pascalStoreName} in ${file}`);
      }
    } catch (error) {
      logger.error(`Error loading store module: ${file}`, error);
    }
  }
}

// Load all stores, prioritizing registry
try {
  // First load from registry
  loadAllStoresFromRegistry();
  
  // Then discover and load any remaining stores
  discoverAndLoadRemainingStores();
  
  logger.info(`Loaded ${storeList.size} stores total`);
} catch (error) {
  logger.error('Error loading stores:', error);
}

// Sets for storing unique brands, models, and series
const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

/**
 * Filter and populate the lists of brands, series, and models
 */
function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of Array.from(storeList.values())) {
    for (const link of store.links) {
      brands.add(link.brand);
      series.add(link.series);
      models.add(link.model);
    }

    if (store.minPageSleep === undefined) {
      store.minPageSleep = defaultStoreData.minPageSleep;
    }

    if (store.maxPageSleep === undefined) {
      store.maxPageSleep = defaultStoreData.maxPageSleep;
    }
  }
}

/**
 * Print the current configuration
 */
function printConfig() {
  if (config.store.showOnlyBrands.length > 0) {
    logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
  }

  if (config.store.showOnlyModels.length > 0) {
    logger.info(
      `ℹ selected models: ${config.store.showOnlyModels
        .map(entry => {
          return entry.series
            ? entry.name + ' (' + entry.series + ')'
            : entry.name;
        })
        .join(', ')}`
    );
  }

  if (config.store.showOnlySeries.length > 0) {
    logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
  }

  if (config.store.stores.length > 0) {
    const stores = darkenEmptyStores();
    logger.info(`ℹ selected stores: ${stores.names.join(', ')}`);

    if (stores.anyExcluded) {
      logger.warn(
        'ℹ some of the selected stores (grayed out) dont have what you are looking for'
      );
    }
  }
}

/**
 * Highlight stores that don't have what the user is looking for
 */
function darkenEmptyStores(): {names: string[]; anyExcluded: boolean} {
  let anyExcluded = false;
  const selectedStores = config.store.stores.map(store => store.name);

  const names = selectedStores.map(selected => {
    const storeConfig = storeList.get(selected);
    const hasAny =
      storeConfig?.links.some(
        l =>
          (config.store.showOnlySeries?.includes(l.series as string) ?? false) ||
          config.store.showOnlyBrands?.includes(l.brand as string) ||
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ??
            false)
      ) ?? true;

    if (!hasAny) {
      anyExcluded = true;
      return chalk.gray(selected);
    }

    return selected;
  });

  return {names, anyExcluded};
}

export function getAllBrands() {
  return Array.from(brands);
}

export function getAllSeries() {
  return Array.from(series);
}

export function getAllModels() {
  return Array.from(models);
}

export function getAllCountries() {
  const countries = new Set();
  for (const store of Array.from(storeList.values())) {
    countries.add(store.country);
  }
  return Array.from(countries);
}

export function getStores() {
  return Array.from(storeList.values());
}

export function updateStores() {
  clearLinkCache();
  filterBrandsSeriesModels();
  printConfig();
  return getStores();
}

export * from './store';