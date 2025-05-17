/**
 * Store configuration for bt
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Bt store
 */
export const Bt = createStoreFromRegistry('bt');
