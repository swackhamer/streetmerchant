/**
 * Store configuration for officedepot
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Officedepot store
 */
export const Officedepot = createStoreFromRegistry('officedepot');
