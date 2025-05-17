/**
 * Store configuration for proshop-no
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Proshop-no store
 */
export const ProshopNo = createStoreFromRegistry('proshop-no');
