/**
 * Store configuration for very
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Very store
 */
export const Very = createStoreFromRegistry('very');
