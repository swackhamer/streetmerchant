/**
 * Store configuration for unieuro
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Unieuro store
 */
export const Unieuro = createStoreFromRegistry('unieuro');
