/**
 * Store configuration for memoryexpress
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Memoryexpress store
 */
export const Memoryexpress = createStoreFromRegistry('memoryexpress');
