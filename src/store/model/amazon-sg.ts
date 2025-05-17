/**
 * Store configuration for amazon-sg
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-sg store
 */
export const AmazonSg = createStoreFromRegistry('amazon-sg');
