/**
 * Store configuration for mwave
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Mwave store
 */
export const Mwave = createStoreFromRegistry('mwave');
