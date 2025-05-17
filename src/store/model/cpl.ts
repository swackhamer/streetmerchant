/**
 * Store configuration for cpl
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Cpl store
 */
export const Cpl = createStoreFromRegistry('cpl');
