/**
 * Store configuration for saveonit
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Saveonit store
 */
export const Saveonit = createStoreFromRegistry('saveonit');
