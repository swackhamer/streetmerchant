/**
 * Store configuration for pny
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pny store
 */
export const Pny = createStoreFromRegistry('pny');
