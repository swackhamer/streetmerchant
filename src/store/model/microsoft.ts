/**
 * Store configuration for microsoft
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Microsoft store
 */
export const Microsoft = createStoreFromRegistry('microsoft');
