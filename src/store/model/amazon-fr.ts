/**
 * Store configuration for amazon-fr
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-fr store
 */
export const AmazonFr = createStoreFromRegistry('amazon-fr');
