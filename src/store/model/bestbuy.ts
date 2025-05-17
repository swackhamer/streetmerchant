/**
 * Store configuration for bestbuy
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Bestbuy store
 */
export const Bestbuy = createStoreFromRegistry('bestbuy');