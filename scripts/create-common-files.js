/**
 * Script to create the common utility files for the factory approach
 */
const fs = require('fs');
const path = require('path');
const util = require('util');

// Promisify fs functions
const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);

// Constants
const BASE_DIR = path.resolve(__dirname, '..');
const STORE_DIR = path.join(BASE_DIR, 'src', 'store', 'model');
const COMMON_DIR = path.join(STORE_DIR, 'common');

/**
 * Creates a directory if it doesn't exist
 */
async function ensureDir(dir) {
  try {
    await mkdir(dir, {recursive: true});
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}

/**
 * Creates the common file structure and files
 */
async function createCommonFiles() {
  try {
    console.log('Creating common directory structure...');
    await ensureDir(COMMON_DIR);

    // Create label-sets.ts
    const labelSetsContent = `/**
 * Common label sets for store configurations
 * This file contains reusable label configurations to reduce duplication across store files
 */
import {Labels, LabelQuery} from '../store';

/**
 * Standard in-stock label patterns by category
 */
export const inStockLabels = {
  // Common patterns for add to cart buttons
  addToCart: {
    container: '.add-to-cart',
    text: ['add to cart', 'add to bag', 'buy now'],
  },
  // Patterns for availability messages
  available: {
    container: '.availability',
    text: ['in stock', 'available', 'in store'],
  },
  // Patterns for button states
  buttonEnabled: {
    container: 'button:not([disabled])',
    text: ['add to cart', 'buy now'],
  },
};

/**
 * Standard out-of-stock label patterns by category
 */
export const outOfStockLabels = {
  // Common out of stock messages
  standard: {
    container: '.availability',
    text: ['out of stock', 'sold out', 'unavailable'],
  },
  // Pre-order patterns
  preOrder: {
    container: '.availability',
    text: ['pre-order', 'coming soon', 'notify me'],
  },
  // Button states indicating out of stock
  buttonDisabled: {
    container: 'button[disabled]',
    text: ['add to cart', 'buy now'],
  },
};

/**
 * Common price selector patterns
 */
export const pricingLabels = {
  // Standard price containers
  standard: {
    container: '.price',
    euroFormat: false,
  },
  // Euro-formatted prices
  euro: {
    container: '.price',
    euroFormat: true,
  },
  // Sale prices
  sale: {
    container: '.sale-price',
    euroFormat: false,
  },
};

/**
 * Common banned seller patterns
 */
export const bannedSellerLabels = {
  // Third-party sellers
  thirdParty: {
    container: '.seller-info',
    text: ['third party', 'marketplace', 'sold by'],
  },
};

/**
 * Creates a complete label set using common configurations
 */
export function createLabelSet(options: {
  inStock?: LabelQuery | LabelQuery[];
  outOfStock?: LabelQuery | LabelQuery[];
  maxPrice?: {
    container: string;
    euroFormat?: boolean;
  };
  bannedSeller?: LabelQuery | LabelQuery[];
  captcha?: LabelQuery | LabelQuery[];
}): Labels {
  return options;
}

/**
 * Common label configurations for different store types
 */
export const commonLabels = {
  // Standard e-commerce labels
  standard: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.standard,
  }),

  // European store labels
  european: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.euro,
  }),

  // Marketplace with third-party sellers
  marketplace: createLabelSet({
    inStock: inStockLabels.addToCart,
    outOfStock: outOfStockLabels.standard,
    maxPrice: pricingLabels.standard,
    bannedSeller: bannedSellerLabels.thirdParty,
  }),
};`;
    await writeFile(path.join(COMMON_DIR, 'label-sets.ts'), labelSetsContent);
    console.log('Created label-sets.ts');

    // Create link-factory.ts
    const linkFactoryContent = `/**
 * Link factory for creating standardized product links
 * This reduces duplication by providing factory methods for common products
 */
import {Link, Brand, Series, Model} from '../store';

/**
 * Options for creating a product link
 */
export interface LinkOptions {
  brand: Brand;
  model: Model;
  series: Series;
  url: string;
  cartUrl?: string;
  itemNumber?: string;
  price?: number;
}

/**
 * Creates a product link with the given options
 */
export function createLink(options: LinkOptions): Link {
  return {
    brand: options.brand,
    model: options.model,
    series: options.series,
    url: options.url,
    ...(options.cartUrl ? {cartUrl: options.cartUrl} : {}),
    ...(options.itemNumber ? {itemNumber: options.itemNumber} : {}),
    ...(options.price ? {price: options.price} : {}),
  };
}

/**
 * Creates a set of product links with the same brand and series
 */
export function createBrandSeriesLinks(
  brand: Brand,
  series: Series,
  configs: Array<{
    model: Model;
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return configs.map(config => createLink({
    brand,
    series,
    ...config,
  }));
}

/**
 * Utility for creating NVIDIA Founders Edition links
 */
export function createFoundersEditionLinks(
  series: Series,
  configs: Array<{
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return createBrandSeriesLinks('nvidia', series, configs.map(config => ({
    model: 'founders edition',
    ...config,
  })));
}

/**
 * Utility for creating AMD reference links
 */
export function createAmdReferenceLinks(
  series: Series,
  configs: Array<{
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return createBrandSeriesLinks('amd', series, configs.map(config => ({
    model: 'amd reference',
    ...config,
  })));
}

/**
 * Creates a test product link
 */
export function createTestLink(url: string): Link {
  return createLink({
    brand: 'test:brand',
    model: 'test:model',
    series: 'test:series',
    url,
  });
}`;
    await writeFile(
      path.join(COMMON_DIR, 'link-factory.ts'),
      linkFactoryContent
    );
    console.log('Created link-factory.ts');

    // Create store-factory.ts
    const storeFactoryContent = `/**
 * Store factory for creating standardized store configurations
 * This reduces duplication by providing factory methods for common store types
 */
import {Store, Labels} from '../store';
import {Browser} from 'puppeteer';
import {getSeriesLinks, LinkFilterOptions} from '../series-links';
import {commonLabels} from './label-sets';

/**
 * Options for creating a store configuration
 */
export interface StoreFactoryOptions {
  // Required store properties
  name: string;
  country: string;
  currency: string;
  
  // Optional store properties
  labels?: Labels;
  seriesLinkOptions?: LinkFilterOptions;
  disableAdBlocker?: boolean;
  successStatusCodes?: Array<number | [number, number]>;
  backoffStatusCodes?: Array<number | [number, number]>;
  
  // Optional browser behavior
  minPageSleep?: number;
  maxPageSleep?: number;
  
  // Custom setup actions
  customSetupAction?: (browser: Browser) => Promise<void>;
}

/**
 * Creates a store with series-based organization
 */
export function createStore(options: StoreFactoryOptions): Store {
  // Use provided labels or default to standard labels
  const labels = options.labels || commonLabels.standard;
  
  // Create the store object
  const store: Store = {
    currency: options.currency as any, // Type cast to satisfy TS
    labels,
    links: [], // Start with empty links that will be dynamically loaded
    name: options.name,
    country: options.country,
  };
  
  // Add optional properties if provided
  if (options.disableAdBlocker !== undefined) {
    store.disableAdBlocker = options.disableAdBlocker;
  }
  
  if (options.successStatusCodes) {
    store.successStatusCodes = options.successStatusCodes;
  }
  
  if (options.backoffStatusCodes) {
    store.backoffStatusCodes = options.backoffStatusCodes;
  }
  
  if (options.minPageSleep !== undefined) {
    store.minPageSleep = options.minPageSleep;
  }
  
  if (options.maxPageSleep !== undefined) {
    store.maxPageSleep = options.maxPageSleep;
  }
  
  // Create the setupAction function with series-based organization
  store.setupAction = async (browser: Browser) => {
    // Load links based on series directories
    store.links = await getSeriesLinks(options.name, options.seriesLinkOptions);
    
    // Call custom setup action if provided
    if (options.customSetupAction) {
      await options.customSetupAction(browser);
    }
  };
  
  return store;
}

/**
 * Creates a standard e-commerce store
 */
export function createStandardStore(options: Omit<StoreFactoryOptions, 'labels'> & { 
  labels?: Labels 
}): Store {
  return createStore({
    ...options,
    labels: options.labels || commonLabels.standard,
  });
}

/**
 * Creates a European store with euro formatting
 */
export function createEuropeanStore(options: Omit<StoreFactoryOptions, 'labels'> & { 
  labels?: Labels 
}): Store {
  return createStore({
    ...options,
    labels: options.labels || commonLabels.european,
  });
}

/**
 * Creates a marketplace store with third-party seller detection
 */
export function createMarketplaceStore(options: Omit<StoreFactoryOptions, 'labels'> & { 
  labels?: Labels 
}): Store {
  return createStore({
    ...options,
    labels: options.labels || commonLabels.marketplace,
  });
}`;
    await writeFile(
      path.join(COMMON_DIR, 'store-factory.ts'),
      storeFactoryContent
    );
    console.log('Created store-factory.ts');

    console.log('Successfully created all common files!');
  } catch (err) {
    console.error('Error creating common files:', err);
  }
}

// Execute the function
createCommonFiles();