/**
 * Store configuration for arlt
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Arlt store
 */
export const Arlt = createStoreFromRegistry('arlt');
