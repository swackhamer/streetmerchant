/**
 * Store configuration for amd-nl
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-nl store
 */
export const AmdNl = createStoreFromRegistry('amd-nl');
