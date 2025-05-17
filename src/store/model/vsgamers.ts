/**
 * Store configuration for vsgamers
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Vsgamers store
 */
export const Vsgamers = createStoreFromRegistry('vsgamers');
