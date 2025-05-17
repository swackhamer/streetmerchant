/**
 * Store configuration for adorama
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Adorama store
 */
export const Adorama = createStoreFromRegistry('adorama');
