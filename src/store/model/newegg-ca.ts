/**
 * Store configuration for newegg-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * NeweggCa store
 */
export const NeweggCa = createStoreFromRegistry('newegg-ca');
