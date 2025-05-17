/**
 * Store configuration for msi
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Msi store
 */
export const Msi = createStoreFromRegistry('msi');
