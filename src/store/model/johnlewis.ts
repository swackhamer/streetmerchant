/**
 * Store configuration for johnlewis
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Johnlewis store
 */
export const Johnlewis = createStoreFromRegistry('johnlewis');
