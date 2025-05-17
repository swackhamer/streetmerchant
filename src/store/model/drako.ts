/**
 * Store configuration for drako
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Drako store
 */
export const Drako = createStoreFromRegistry('drako');
