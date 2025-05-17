/**
 * Store configuration for lmc
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Lmc store
 */
export const Lmc = createStoreFromRegistry('lmc');
