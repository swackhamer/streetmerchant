/**
 * Store configuration for msy
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Msy store
 */
export const Msy = createStoreFromRegistry('msy');
