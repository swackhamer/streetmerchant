/**
 * Store configuration for ccl
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ccl store
 */
export const Ccl = createStoreFromRegistry('ccl');
