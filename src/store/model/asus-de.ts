/**
 * Store configuration for asus-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Asus-de store
 */
export const AsusDe = createStoreFromRegistry('asus-de');
