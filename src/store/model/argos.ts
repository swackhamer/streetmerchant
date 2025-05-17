/**
 * Store configuration for argos
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Argos store
 */
export const Argos = createStoreFromRegistry('argos');
