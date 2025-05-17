/**
 * Store configuration for storm
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Storm store
 */
export const Storm = createStoreFromRegistry('storm');
