/**
 * Store configuration for proshop-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Proshop-de store
 */
export const ProshopDe = createStoreFromRegistry('proshop-de');
