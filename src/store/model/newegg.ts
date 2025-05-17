/**
 * Store configuration for newegg
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Newegg store
 */
export const Newegg = createStoreFromRegistry('newegg');