/**
 * Store configuration for amazon
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon store
 */
export const Amazon = createStoreFromRegistry('amazon');
