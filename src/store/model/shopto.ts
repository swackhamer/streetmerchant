/**
 * Store configuration for shopto
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Shopto store
 */
export const Shopto = createStoreFromRegistry('shopto');
