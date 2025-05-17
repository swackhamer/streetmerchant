/**
 * Store configuration for otto
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Otto store
 */
export const Otto = createStoreFromRegistry('otto');
