/**
 * Store configuration for thewarehouse
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Thewarehouse store
 */
export const Thewarehouse = createStoreFromRegistry('thewarehouse');
