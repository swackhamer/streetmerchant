/**
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
}