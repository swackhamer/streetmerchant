/**
 * Store configuration for amd-it
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-it store
 */
export const AmdIt = createStoreFromRegistry('amd-it');
