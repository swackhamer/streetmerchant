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
import {storeRegistry, createStoreFromRegistry, getAllStoreNames} from './registry';

// Sample store using series links (for testing only)
import {SampleStoreSeries} from './sample-store-series';

// Map to hold store instances
const storeList = new Map<string, Store>();

// Add the sample store for testing/development
// Note: We only want to add the sample store during development/testing
if (process.env.NODE_ENV === 'development' || process.env.ENABLE_SAMPLE_STORE === 'true') {
  storeList.set(SampleStoreSeries.name, SampleStoreSeries);
  logger.debug('Added sample store for testing/development');
}

// Export the storeList for web interface
export {storeList};

// Function to load all stores from the registry
function loadAllStoresFromRegistry() {
  // Get all store names from the registry
  const storeNames = getAllStoreNames();

  for (const storeName of storeNames) {
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

  logger.info(`Loaded ${storeList.size} stores from registry`);
}

// Load all stores from registry
try {
  loadAllStoresFromRegistry();
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
          return entry.series ? entry.name + ' (' + entry.series + ')' : entry.name;
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
      logger.warn('ℹ some of the selected stores (grayed out) dont have what you are looking for');
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
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ?? false)
      ) ?? true;

    if (!hasAny) {
      anyExcluded = true;
      return chalk.grey(selected);
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
export {seriesData} from './series-data';
