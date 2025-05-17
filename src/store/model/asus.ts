/**
 * Store configuration for asus
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Asus store
 */
export const Asus = createStoreFromRegistry('asus');
