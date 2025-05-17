/**
 * Store configuration for amd-uk
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-uk store
 */
export const AmdUk = createStoreFromRegistry('amd-uk');
