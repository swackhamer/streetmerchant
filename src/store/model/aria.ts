/**
 * Store configuration for aria
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Aria store
 */
export const Aria = createStoreFromRegistry('aria');
