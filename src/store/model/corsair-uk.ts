/**
 * Store configuration for corsair-uk
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Corsair-uk store
 */
export const CorsairUk = createStoreFromRegistry('corsair-uk');
