/**
 * Store configuration for igame
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Igame store
 */
export const Igame = createStoreFromRegistry('igame');
