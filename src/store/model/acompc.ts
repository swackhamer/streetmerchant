/**
 * Store configuration for acompc
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Acompc store
 */
export const Acompc = createStoreFromRegistry('acompc');
