/**
 * Store configuration for amazon-it
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-it store
 */
export const AmazonIt = createStoreFromRegistry('amazon-it');
