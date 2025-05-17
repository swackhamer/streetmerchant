/**
 * Store configuration for gamestop
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Gamestop store
 */
export const Gamestop = createStoreFromRegistry('gamestop');
