import {config, defaultStoreData} from '../../config';

// Import core
import {Store} from './store';
import {clearLinkCache} from './series-links';
import {logger} from '../../logger';
import {initializeSeriesLinksLoader} from './auto-load-series';

// Import factory utilities
import './common/store-factory';
import './common/link-factory';
import './common/label-sets';

// Sample store using series links
import {SampleStoreSeries} from './sample-store-series';

// Load all refactored store files
// Note: This uses dynamic imports through the auto-load-series system

import chalk from 'chalk';

// Pre-populated store list to avoid having to import each store explicitly
import {getAllSeriesNames} from './series/series-names';

// Attempt to dynamically import all store modules
const storeList = new Map();

// Initialize with the sample store
storeList.set(SampleStoreSeries.name, SampleStoreSeries);

// Function to dynamically load all stores
async function loadAllStores() {
  // Note: require.context is webpack-specific and not available in TypeScript
  // For a pure Node.js solution, we use fs instead
  const fs = require('fs');
  const path = require('path');
  const storeFiles = fs.readdirSync(__dirname).filter((file: string) => /\.ts$/.test(file));
  const filteredFiles = storeFiles.filter((key: string) => {
    // Exclude specific utility files and indexes
    return (
      !key.includes('/store.ts') &&
      !key.includes('/index.ts') &&
      !key.includes('/sample-') &&
      !key.includes('/common/') &&
      !key.includes('/series/') &&
      !key.includes('/helpers/') &&
      !key.match(/test|spec|mock/)
    );
  });

  for (const key of filteredFiles) {
    try {
      const storeModule = storeFiles(key);
      const storeName = key.replace(/^\.\//, '').replace(/\.ts$/, '');
      
      // Extract the store object from the module (assuming it's exported as a named export)
      // The name should follow the convention of PascalCase
      const pascalCaseName = storeName
        .split('-')
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
        
      if (storeModule[pascalCaseName]) {
        storeList.set(storeName, storeModule[pascalCaseName]);
      }
    } catch (error) {
      logger.error(`Error loading store module: ${key}`, error);
    }
  }
}

// Initialize series links loaders for all stores
for (const [_, store] of storeList.entries()) {
  initializeSeriesLinksLoader(store);
}

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of storeList.values()) {
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

function darkenEmptyStores(): {names: string[]; anyExcluded: boolean} {
  let anyExcluded = false;
  const selectedStores = config.store.stores.map(store => store.name);

  const names = selectedStores.map(selected => {
    const storeConfig = storeList.get(selected);
    const hasAny =
      storeConfig?.links.some(
        (l: any) =>
          (config.store.showOnlySeries?.includes(l.series) ?? false) ||
          config.store.showOnlyBrands?.includes(l.brand ?? false) ||
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ??
            false)
      ) ?? false;

    anyExcluded = anyExcluded || !hasAny;
    return hasAny ? selected : chalk.gray(selected);
  });
  return {names, anyExcluded};
}

function warnIfStoreDeprecated(store: Store) {
  switch (store.name) {
    case 'evga':
      logger.warn(
        `${store.name} is deprecated since they only support queuing`
      );
      break;
    default:
  }
}

export function updateStores() {
  stores.clear();
  
  // Clear the series links cache when updating stores
  clearLinkCache();

  for (const storeData of config.store.stores) {
    const store = storeList.get(storeData.name);

    if (store) {
      warnIfStoreDeprecated(store);
      stores.set(storeData.name, store);
      store.minPageSleep = storeData.minPageSleep;
      store.maxPageSleep = storeData.maxPageSleep;
      store.proxyList = storeData.proxyList;
      // assign a random starting position so that different stores use
      // different proxies while running at the same time
      store.currentProxyIndex =
        Math.floor(Math.random() * (store.proxyList?.length ?? 0)) - 1;
    } else {
      logger.warn(`No store named ${storeData.name}, skipping.`);
    }
  }

  filterBrandsSeriesModels();
  printConfig();
}

updateStores();

export function getAllBrands() {
  return [...brands];
}

export function getAllSeries() {
  return [
    ...series,
    // Add all possible series from the series directory structure
    ...getAllSeriesNames()
  ];
}

export function getAllModels() {
  return [...models];
}

export function getAllCountries() {
  return Array.from(
    new Set(
      [...storeList].map(storeInfo => storeInfo[1]).map(store => store.country)
    )
  ).sort();
}

export function getStores() {
  return stores;
}

export * from './store';
