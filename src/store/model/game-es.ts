/**
 * Store configuration for game-es
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Game-es store
 */
export const GameEs = createStoreFromRegistry('game-es');
