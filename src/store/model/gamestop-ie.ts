/**
 * Store configuration for gamestop-ie
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Gamestop-ie store
 */
export const GamestopIe = createStoreFromRegistry('gamestop-ie');
