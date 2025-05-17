/**
 * Store configuration for medimax
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Medimax store
 */
export const Medimax = createStoreFromRegistry('medimax');
