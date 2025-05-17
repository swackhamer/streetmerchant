/**
 * Store configuration for evatech
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Evatech store
 */
export const Evatech = createStoreFromRegistry('evatech');
