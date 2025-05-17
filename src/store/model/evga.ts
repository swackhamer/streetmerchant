/**
 * Store configuration for evga
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Evga store
 */
export const Evga = createStoreFromRegistry('evga');
