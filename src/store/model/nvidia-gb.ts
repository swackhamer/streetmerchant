/**
 * Store configuration for nvidia-gb
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * NvidiaGb store
 */
export const NvidiaGb = createStoreFromRegistry('nvidia-gb');
