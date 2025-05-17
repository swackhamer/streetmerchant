/**
 * Store configuration for vuugo
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Vuugo store
 */
export const Vuugo = createStoreFromRegistry('vuugo');
