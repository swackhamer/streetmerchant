/**
 * Store configuration for playstation
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Playstation store
 */
export const Playstation = createStoreFromRegistry('playstation');
