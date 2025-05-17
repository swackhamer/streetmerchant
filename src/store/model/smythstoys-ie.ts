/**
 * Store configuration for smythstoys-ie
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Smythstoys-ie store
 */
export const SmythstoysIe = createStoreFromRegistry('smythstoys-ie');
