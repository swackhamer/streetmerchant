/**
 * Store configuration for pcdiga
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pcdiga store
 */
export const Pcdiga = createStoreFromRegistry('pcdiga');
