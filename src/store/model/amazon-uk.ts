/**
 * Store configuration for amazon-uk
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-uk store
 */
export const AmazonUk = createStoreFromRegistry('amazon-uk');
