/**
 * Store configuration for novoatalho
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Novoatalho store
 */
export const Novoatalho = createStoreFromRegistry('novoatalho');
