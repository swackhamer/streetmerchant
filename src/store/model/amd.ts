/**
 * Store configuration for amd
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd store
 */
export const Amd = createStoreFromRegistry('amd');
