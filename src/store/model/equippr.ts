/**
 * Store configuration for equippr
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Equippr store
 */
export const Equippr = createStoreFromRegistry('equippr');
