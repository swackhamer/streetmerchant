/**
 * Store configuration for netonnet-no
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Netonnet-no store
 */
export const NetonnetNo = createStoreFromRegistry('netonnet-no');
