/**
 * Store configuration for coolblue
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Coolblue store
 */
export const Coolblue = createStoreFromRegistry('coolblue');
