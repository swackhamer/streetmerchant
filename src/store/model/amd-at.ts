/**
 * Store configuration for amd-at
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-at store
 */
export const AmdAt = createStoreFromRegistry('amd-at');
