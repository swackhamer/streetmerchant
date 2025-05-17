/**
 * Store configuration for novatech
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Novatech store
 */
export const Novatech = createStoreFromRegistry('novatech');
