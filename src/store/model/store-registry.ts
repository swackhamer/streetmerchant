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
  // Core store configurations
  'bestbuy': {
    name: 'bestbuy',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.add-to-cart-button',
        text: ['add to cart']
      },
      maxPrice: {
        container: '.priceView-customer-price span',
        euroFormat: false
      },
      outOfStock: {
        container: '.add-to-cart-button',
        text: ['sold out']
      }
    }
  },
  'amazon': {
    name: 'amazon',
    country: 'US',
    currency: '$',
    storeType: 'marketplace',
    labels: {
      captcha: {
        container: 'body',
        text: ['enter the characters you see below']
      },
      inStock: {
        container: '#add-to-cart-button',
        text: ['add to cart']
      },
      maxPrice: {
        container: '#priceblock_ourprice',
        euroFormat: false
      },
      outOfStock: [
        {
          container: '#availability',
          text: ['currently unavailable']
        },
        {
          container: '#outOfStock',
          text: ['unavailable']
        }
      ]
    }
  },
  'newegg': {
    name: 'newegg',
    country: 'US',
    currency: '$',
    storeType: 'standard',
    labels: {
      inStock: {
        container: '.product-buy',
        text: ['add to cart']
      },
      maxPrice: {
        container: '.price-current',
        euroFormat: false
      },
      outOfStock: {
        container: '.product-inventory',
        text: ['out of stock']
      }
    }
  },
  
  // Additional stores
  'alternate-de': {
    name: 'alternate-de',
    country: 'DE',
    currency: '€',
    storeType: 'european',
    labels: {
      inStock: {
        container: '#add-to-cart button[disabled]',
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
  }
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