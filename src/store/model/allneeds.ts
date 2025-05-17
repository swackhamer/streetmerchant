/**
 * Store configuration for allneeds
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Allneeds store
 */
export const Allneeds = createStoreFromRegistry('allneeds');
