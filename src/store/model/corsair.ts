/**
 * Store configuration for corsair
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Corsair store
 */
export const Corsair = createStoreFromRegistry('corsair');
