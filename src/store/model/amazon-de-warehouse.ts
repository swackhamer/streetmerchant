/**
 * Store configuration for amazon-de-warehouse
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-de-warehouse store
 */
export const AmazonDeWarehouse = createStoreFromRegistry('amazon-de-warehouse');
