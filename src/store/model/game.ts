/**
 * Store configuration for game
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Game store
 */
export const Game = createStoreFromRegistry('game');
