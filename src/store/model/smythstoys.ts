/**
 * Store configuration for smythstoys
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Smythstoys store
 */
export const Smythstoys = createStoreFromRegistry('smythstoys');
