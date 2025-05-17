/**
 * Store configuration for amd-be
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amd-be store
 */
export const AmdBe = createStoreFromRegistry('amd-be');
