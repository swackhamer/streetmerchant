/**
 * Store configuration for scan
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Scan store
 */
export const Scan = createStoreFromRegistry('scan');
