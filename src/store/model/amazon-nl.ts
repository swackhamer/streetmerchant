/**
 * Store configuration for amazon-nl
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-nl store
 */
export const AmazonNl = createStoreFromRegistry('amazon-nl');
