/**
 * Store configuration for microcenter
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Microcenter store
 */
export const Microcenter = createStoreFromRegistry('microcenter');
