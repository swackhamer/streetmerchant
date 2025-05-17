/**
 * Store configuration for xbox
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Xbox store
 */
export const Xbox = createStoreFromRegistry('xbox');
