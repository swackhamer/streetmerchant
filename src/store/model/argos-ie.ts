/**
 * Store configuration for argos-ie
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Argos-ie store
 */
export const ArgosIe = createStoreFromRegistry('argos-ie');
