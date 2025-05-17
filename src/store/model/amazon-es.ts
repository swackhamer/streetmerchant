/**
 * Store configuration for amazon-es
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-es store
 */
export const AmazonEs = createStoreFromRegistry('amazon-es');
