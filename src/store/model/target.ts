/**
 * Store configuration for target
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Target store
 */
export const Target = createStoreFromRegistry('target');
