/**
 * Store configuration for comet
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Comet store
 */
export const Comet = createStoreFromRegistry('comet');
