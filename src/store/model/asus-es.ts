/**
 * Store configuration for asus-es
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Asus-es store
 */
export const AsusEs = createStoreFromRegistry('asus-es');
