/**
 * Store configuration for gamestop-it
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Gamestop-it store
 */
export const GamestopIt = createStoreFromRegistry('gamestop-it');
