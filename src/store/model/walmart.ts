/**
 * Store configuration for walmart
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Walmart store
 */
export const Walmart = createStoreFromRegistry('walmart');
