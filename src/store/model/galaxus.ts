/**
 * Store configuration for galaxus
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Galaxus store
 */
export const Galaxus = createStoreFromRegistry('galaxus');
