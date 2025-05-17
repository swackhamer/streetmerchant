/**
 * Store configuration for siabyte
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Siabyte store
 */
export const Siabyte = createStoreFromRegistry('siabyte');
