/**
 * Store configuration for mindfactory
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Mindfactory store
 */
export const Mindfactory = createStoreFromRegistry('mindfactory');
