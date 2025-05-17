/**
 * Store configuration for expert
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Expert store
 */
export const Expert = createStoreFromRegistry('expert');
