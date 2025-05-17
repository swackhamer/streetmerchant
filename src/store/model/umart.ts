/**
 * Store configuration for umart
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Umart store
 */
export const Umart = createStoreFromRegistry('umart');
