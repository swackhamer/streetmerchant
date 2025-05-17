/**
 * Store configuration for saturn
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Saturn store
 */
export const Saturn = createStoreFromRegistry('saturn');
