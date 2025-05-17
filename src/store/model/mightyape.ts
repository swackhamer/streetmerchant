/**
 * Store configuration for mightyape
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Mightyape store
 */
export const Mightyape = createStoreFromRegistry('mightyape');
