/**
 * Store configuration for elkjop
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Elkjop store
 */
export const Elkjop = createStoreFromRegistry('elkjop');
