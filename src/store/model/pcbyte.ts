/**
 * Store configuration for pcbyte
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pcbyte store
 */
export const Pcbyte = createStoreFromRegistry('pcbyte');
