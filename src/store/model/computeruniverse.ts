/**
 * Store configuration for computeruniverse
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Computeruniverse store
 */
export const Computeruniverse = createStoreFromRegistry('computeruniverse');
