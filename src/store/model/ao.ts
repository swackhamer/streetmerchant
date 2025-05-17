/**
 * Store configuration for ao
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ao store
 */
export const Ao = createStoreFromRegistry('ao');
