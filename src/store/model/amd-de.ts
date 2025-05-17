/**
 * Store configuration for amd-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-de store
 */
export const AmdDe = createStoreFromRegistry('amd-de');
