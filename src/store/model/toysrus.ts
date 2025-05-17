/**
 * Store configuration for toysrus
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Toysrus store
 */
export const Toysrus = createStoreFromRegistry('toysrus');
