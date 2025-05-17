/**
 * Store configuration for ollo
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ollo store
 */
export const Ollo = createStoreFromRegistry('ollo');
