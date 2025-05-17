/**
 * Store configuration for nvidia-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * NvidiaDe store
 */
export const NvidiaDe = createStoreFromRegistry('nvidia-de');
