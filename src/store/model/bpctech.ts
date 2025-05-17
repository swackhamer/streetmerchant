/**
 * Store configuration for bpctech
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Bpctech store
 */
export const Bpctech = createStoreFromRegistry('bpctech');
