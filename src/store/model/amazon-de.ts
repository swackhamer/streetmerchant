/**
 * Store configuration for amazon-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Amazon-de store
 */
export const AmazonDe = createStoreFromRegistry('amazon-de');
