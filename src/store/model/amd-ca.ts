/**
 * Store configuration for amd-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-ca store
 */
export const AmdCa = createStoreFromRegistry('amd-ca');
