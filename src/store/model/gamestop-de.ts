/**
 * Store configuration for gamestop-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Gamestop-de store
 */
export const GamestopDe = createStoreFromRegistry('gamestop-de');
