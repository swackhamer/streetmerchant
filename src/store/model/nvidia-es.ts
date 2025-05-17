/**
 * Store configuration for nvidia-es
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Nvidia-es store
 */
export const NvidiaEs = createStoreFromRegistry('nvidia-es');
