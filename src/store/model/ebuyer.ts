/**
 * Store configuration for ebuyer
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ebuyer store
 */
export const Ebuyer = createStoreFromRegistry('ebuyer');
