/**
 * Store configuration for wipoid
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Wipoid store
 */
export const Wipoid = createStoreFromRegistry('wipoid');
