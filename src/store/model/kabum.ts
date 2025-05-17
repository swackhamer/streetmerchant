/**
 * Store configuration for kabum
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Kabum store
 */
export const Kabum = createStoreFromRegistry('kabum');
