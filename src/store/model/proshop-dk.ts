/**
 * Store configuration for proshop-dk
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Proshop-dk store
 */
export const ProshopDk = createStoreFromRegistry('proshop-dk');
