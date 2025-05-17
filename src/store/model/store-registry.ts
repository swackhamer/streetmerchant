/**
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
import {commonLabels} from './common/label-sets';

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
  // United States Stores
  'amazon': {
    name: 'amazon',
    country: 'US',
    currency: '$',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'bestbuy': {
    name: 'bestbuy',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.bestbuy,
  },
  'newegg': {
    name: 'newegg',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: commonLabels.newegg,
  },
  'antonline': {
    name: 'antonline',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.add-to-cart-form',
        text: ['add to cart'],
      },
      outOfStock: {
        container: '.product-form-buttons',
        text: ['sold out'],
      },
      maxPrice: {
        container: '.price-value',
        euroFormat: false,
      },
    },
  },
  'amd': {
    name: 'amd',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.btn-shopping-cart',
        text: ['add to cart'],
      },
      outOfStock: {
        container: '.product-out-of-stock',
        text: ['out of stock'],
      },
      maxPrice: {
        container: '.product-page-description h4',
        euroFormat: false,
      },
    },
    minPageSleep: 15000,
    maxPageSleep: 30000,
  },
  'microcenter': {
    name: 'microcenter',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.inventory',
        text: ['in stock']
      },
      maxPrice: {
        container: '.price-info .price',
        euroFormat: false
      },
      outOfStock: {
        container: '.inventory',
        text: ['sold out']
      }
    }
  },
  'evga': {
    name: 'evga',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-buy-button',
        text: ['add to cart']
      },
      maxPrice: {
        container: '.product-price',
        euroFormat: false
      },
      outOfStock: {
        container: '.product-inventory',
        text: ['out of stock']
      }
    },
    minPageSleep: 10000,
    maxPageSleep: 15000
  },
  'bandh': {
    name: 'bandh',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.purchase-buttons button',
        text: ['add to cart'],
      },
      outOfStock: {
        container: '.purchase-buttons button',
        text: ['notify when available'],
      },
      maxPrice: {
        container: '.price',
        euroFormat: false,
      },
    },
  },
  'corsair': {
    name: 'corsair',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.c-btn--primary.js-btn-add-to-cart',
        text: ['add to cart'],
      },
      outOfStock: {
        container: '.c-btn--disabled.js-btn-add-to-cart',
        text: ['out of stock'],
      },
      maxPrice: {
        container: '.c-product-price__main',
        euroFormat: false,
      },
    },
  },
  
  // Canadian Stores
  'bestbuy-ca': {
    name: 'bestbuy-ca',
    country: 'CA',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.addToCartButton',
        text: ['add to cart']
      },
      maxPrice: {
        container: '.price-box__price',
        euroFormat: false
      },
      outOfStock: {
        container: '.addToCartButton',
        text: ['sold out']
      }
    }
  },
  'amazon-ca': {
    name: 'amazon-ca',
    country: 'CA',
    currency: '$',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'canadacomputers': {
    name: 'canadacomputers',
    country: 'CA',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.page-outofstock-btn',
        text: ['add to cart']
      },
      maxPrice: {
        container: '.h3-pricing',
        euroFormat: false
      },
      outOfStock: {
        container: '.page-outofstock-btn',
        text: ['out of stock']
      }
    }
  },
  
  // UK Stores
  'amazon-uk': {
    name: 'amazon-uk',
    country: 'UK',
    currency: '£',
    storeType: 'marketplace',
    labels: commonLabels.amazon,
  },
  'currys': {
    name: 'currys',
    country: 'UK',
    currency: '£',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.add-to-basket-btn',
        text: ['add to basket'],
      },
      outOfStock: {
        container: '.out-of-stock-message',
        text: ['out of stock'],
      },
      maxPrice: {
        container: '.current-price',
        euroFormat: false,
      },
    },
  },
  'scan': {
    name: 'scan',
    country: 'UK',
    currency: '£',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.buyPanel .actions',
        text: ['add to basket'],
      },
      outOfStock: {
        container: '.buyPanel .actions',
        text: ['out of stock'],
      },
      maxPrice: {
        container: '.price',
        euroFormat: false,
      },
    },
  },
  
  // German Stores
  'amazon-de': {
    name: 'amazon-de',
    country: 'DE',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazonDE,
  },
  'alternate-de': {
    name: 'alternate-de',
    country: 'DE',
    currency: '€',
    storeType: 'european',
    labels: {
      inStock: {
        container: '#add-to-cart button',
        text: ['in den warenkorb'],
      },
      outOfStock: {
        container: '.stockStatus',
        text: ['ausverkauft'],
      },
      maxPrice: {
        container: '.price',
        euroFormat: true,
      },
    },
  },
  
  // French Stores
  'amazon-fr': {
    name: 'amazon-fr',
    country: 'FR',
    currency: '€',
    storeType: 'marketplace',
    labels: commonLabels.amazonFR,
  },
  'ldlc': {
    name: 'ldlc',
    country: 'FR',
    currency: '€',
    storeType: 'european',
    labels: {
      inStock: {
        container: '.add-to-cart',
        text: ['ajouter au panier'],
      },
      outOfStock: {
        container: '.add-to-cart',
        text: ['en rupture'],
      },
      maxPrice: {
        container: '.price .price',
        euroFormat: true,
      },
    },
  },
};

/**
 * Creates a store instance from the registry
 */
export function createStoreFromRegistry(storeName: string): Store {
  const config = storeRegistry[storeName];
  if (!config) {
    throw new Error(`Store "${storeName}" not found in registry`);
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
    throw new Error(`Store "${storeName}" not found in registry`);
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
}