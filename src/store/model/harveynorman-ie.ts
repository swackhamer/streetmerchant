/**
 * Store configuration for harveynorman-ie
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Harveynorman-ie store
 */
export const HarveynormanIe = createStoreFromRegistry('harveynorman-ie');
