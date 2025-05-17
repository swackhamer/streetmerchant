/**
 * Store configuration for euronics
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Euronics store
 */
export const Euronics = createStoreFromRegistry('euronics');
