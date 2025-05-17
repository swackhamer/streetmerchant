/**
 * Store configuration for bandh
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Bandh store
 */
export const Bandh = createStoreFromRegistry('bandh');
