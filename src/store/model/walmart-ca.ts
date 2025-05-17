/**
 * Store configuration for walmart-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Walmart-ca store
 */
export const WalmartCa = createStoreFromRegistry('walmart-ca');
