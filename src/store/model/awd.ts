/**
 * Store configuration for awd
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Awd store
 */
export const Awd = createStoreFromRegistry('awd');
