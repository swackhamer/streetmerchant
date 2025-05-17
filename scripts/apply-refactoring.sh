#!/bin/bash

# Script to apply refactored files to the codebase

echo "Applying refactored store files..."

# Base directories
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STORE_DIR="${BASE_DIR}/src/store/model"
REFACTORED_DIR="${STORE_DIR}/refactored"
COMMON_DIR="${STORE_DIR}/common"
SERIES_DIR="${STORE_DIR}/series"

# Backup the original files
echo "Creating backup of original store files..."
BACKUP_DIR="${BASE_DIR}/store-backup-$(date +%Y%m%d%H%M%S)"
mkdir -p "${BACKUP_DIR}"
cp -r "${STORE_DIR}"/*.ts "${BACKUP_DIR}/"

# Ensure common directory exists
echo "Creating common directory..."
mkdir -p "${COMMON_DIR}"
cp "${STORE_DIR}/store-factory.ts" "${COMMON_DIR}/"
cp "${STORE_DIR}/link-factory.ts" "${COMMON_DIR}/"
cp "${STORE_DIR}/label-sets.ts" "${COMMON_DIR}/"

# Move refactored files into place
echo "Moving refactored files into place..."
for file in "${REFACTORED_DIR}"/*.ts; do
  filename=$(basename "$file")
  # Skip helper files and templates
  if [[ "$filename" != "store.ts" && "$filename" != "index.ts" && "$filename" != *"helper"* && "$filename" != *"template"* ]]; then
    echo "  Applying $filename"
    cp "$file" "${STORE_DIR}/$filename"
  fi
done

echo "Creating updated index.ts file..."

# Create a new index.ts that uses the factory approach
cat > "${STORE_DIR}/index.new.ts" << 'EOF'
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
  const storeFiles = require.context('./', false, /\.ts$/);
  const filteredFiles = storeFiles.keys().filter(key => {
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
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
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
        l =>
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
EOF

echo "Creating series names helper file..."

# Create a helper file to list all series names
mkdir -p "${STORE_DIR}/series"
cat > "${STORE_DIR}/series/series-names.ts" << 'EOF'
import fs from 'fs';
import path from 'path';

// Cache for series names
let seriesNames: string[] | null = null;

/**
 * Gets all series names based on the directory structure
 */
export function getAllSeriesNames(): string[] {
  // Return cached result if available
  if (seriesNames) {
    return seriesNames;
  }
  
  try {
    // Get all series directories
    const seriesDir = path.resolve(__dirname, './');
    const entries = fs.readdirSync(seriesDir, { withFileTypes: true });
    
    // Filter for directories and exclude any hidden directories or utility files
    seriesNames = entries
      .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
      .map(entry => entry.name);
      
    return seriesNames;
  } catch (error) {
    console.error('Error reading series directories:', error);
    return [];
  }
}
EOF

echo "Done! Review the changes and run the application to test."
echo "To revert to the original files, copy them back from ${BACKUP_DIR}"