/**
 * Store registry index - Combines all regional store registries
 */
import {ExtendedStoreOptions} from './types';
import {usStores} from './us-stores';
import {caStores} from './ca-stores';
import {ukStores} from './uk-stores';
import {deStores, frStores, otherEuStores} from './eu-stores';
import {auNzStores, asiaStores, specialtyStores} from './other-stores';

// Export type and factory functions
export {ExtendedStoreOptions} from './types';
export {createStoreFromRegistry, createStore} from './store-factory';

/**
 * Get all store names from the registry
 */
export function getAllStoreNames(): string[] {
  return Object.keys(storeRegistry);
}

/**
 * Combine all store registries into a single registry
 */
export const storeRegistry: Record<string, ExtendedStoreOptions> = {
  // US stores
  ...usStores,
  
  // Canadian stores
  ...caStores,
  
  // UK stores
  ...ukStores,
  
  // European stores
  ...deStores,
  ...frStores,
  ...otherEuStores,
  
  // Other region stores
  ...auNzStores,
  ...asiaStores,
  ...specialtyStores,
};

/**
 * Helper function to get a store configuration by name
 */
export function getStoreConfig(storeName: string): ExtendedStoreOptions | undefined {
  return storeRegistry[storeName];
}