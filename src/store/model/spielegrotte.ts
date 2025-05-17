/**
 * Store configuration for spielegrotte
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Spielegrotte store
 */
export const Spielegrotte = createStoreFromRegistry('spielegrotte');
