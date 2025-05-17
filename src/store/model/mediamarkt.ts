/**
 * Store configuration for mediamarkt
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Mediamarkt store
 */
export const Mediamarkt = createStoreFromRegistry('mediamarkt');
