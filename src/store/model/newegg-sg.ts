/**
 * Store configuration for newegg-sg
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Newegg-sg store
 */
export const NeweggSg = createStoreFromRegistry('newegg-sg');
