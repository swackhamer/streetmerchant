/**
 * Store factory functions
 */
import {ExtendedStoreOptions} from './types';
import {Store} from '../store';
import {
  createStandardStore,
  createEuropeanStore,
  createMarketplaceStore
} from '../common/store-factory';
import {getStoreConfig} from './index';

/**
 * Create a store instance from the registry by name
 */
export function createStoreFromRegistry(storeName: string): Store {
  const config = getStoreConfig(storeName);
  if (!config) {
    throw new Error(`Store "${storeName}" not found in registry`);
  }
  
  return createStore(config);
}

/**
 * Create a store based on type
 */
export function createStore(options: ExtendedStoreOptions): Store {
  switch (options.storeType) {
    case 'european':
      return createEuropeanStore(options);
    case 'marketplace':
      return createMarketplaceStore(options);
    case 'standard':
    default:
      return createStandardStore(options);
  }
}