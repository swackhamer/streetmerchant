/**
 * Store configuration for amazon-ca
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-ca store
 */
export const AmazonCa = createStoreFromRegistry('amazon-ca');
