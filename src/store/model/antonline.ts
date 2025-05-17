/**
 * Store configuration for antonline
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Antonline store
 */
export const Antonline = createStoreFromRegistry('antonline');
