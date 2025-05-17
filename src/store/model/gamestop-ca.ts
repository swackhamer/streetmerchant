/**
 * Store configuration for gamestop-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Gamestop-ca store
 */
export const GamestopCa = createStoreFromRegistry('gamestop-ca');
