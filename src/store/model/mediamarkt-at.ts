/**
 * Store configuration for mediamarkt-at
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Mediamarkt-at store
 */
export const MediamarktAt = createStoreFromRegistry('mediamarkt-at');
