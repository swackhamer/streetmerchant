/**
 * Store configuration for evga-eu
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Evga-eu store
 */
export const EvgaEu = createStoreFromRegistry('evga-eu');
