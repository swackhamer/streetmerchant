/**
 * Store configuration for pbtech
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pbtech store
 */
export const Pbtech = createStoreFromRegistry('pbtech');
