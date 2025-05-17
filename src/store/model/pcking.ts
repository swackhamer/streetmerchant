/**
 * Store configuration for pcking
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pcking store
 */
export const Pcking = createStoreFromRegistry('pcking');
