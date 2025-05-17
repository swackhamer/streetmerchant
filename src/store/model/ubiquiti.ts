/**
 * Store configuration for ubiquiti
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ubiquiti store
 */
export const Ubiquiti = createStoreFromRegistry('ubiquiti');
