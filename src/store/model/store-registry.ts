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
  // Registry entries will be added from the conversion script

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