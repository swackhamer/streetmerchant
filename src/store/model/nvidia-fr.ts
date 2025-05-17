/**
 * Store configuration for nvidia-fr
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Nvidia-fr store
 */
export const NvidiaFr = createStoreFromRegistry('nvidia-fr');
