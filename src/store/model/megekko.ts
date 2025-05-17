/**
 * Store configuration for megekko
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Megekko store
 */
export const Megekko = createStoreFromRegistry('megekko');
