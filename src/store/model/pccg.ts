/**
 * Store configuration for pccg
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Pccg store
 */
export const Pccg = createStoreFromRegistry('pccg');
