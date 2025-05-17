/**
 * Store configuration for pccomponentes
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pccomponentes store
 */
export const Pccomponentes = createStoreFromRegistry('pccomponentes');
