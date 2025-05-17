/**
 * Store configuration for tesco-ie
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Tesco-ie store
 */
export const TescoIe = createStoreFromRegistry('tesco-ie');
