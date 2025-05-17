/**
 * Store configuration for neobyte
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Neobyte store
 */
export const Neobyte = createStoreFromRegistry('neobyte');
