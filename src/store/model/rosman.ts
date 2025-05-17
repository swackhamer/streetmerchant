/**
 * Store configuration for rosman
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Rosman store
 */
export const Rosman = createStoreFromRegistry('rosman');
