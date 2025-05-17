/**
 * Store configuration for futurex
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Futurex store
 */
export const Futurex = createStoreFromRegistry('futurex');
