/**
 * Store configuration for noelleeming
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Noelleeming store
 */
export const Noelleeming = createStoreFromRegistry('noelleeming');
