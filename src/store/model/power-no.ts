/**
 * Store configuration for power-no
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Power-no store
 */
export const PowerNo = createStoreFromRegistry('power-no');
