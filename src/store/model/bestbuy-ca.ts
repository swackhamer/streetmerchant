/**
 * Store configuration for bestbuy-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Bestbuy-ca store
 */
export const BestbuyCa = createStoreFromRegistry('bestbuy-ca');
