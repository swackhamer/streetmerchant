/**
 * Store configuration for eletronicamente
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Eletronicamente store
 */
export const Eletronicamente = createStoreFromRegistry('eletronicamente');
