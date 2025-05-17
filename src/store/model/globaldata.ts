/**
 * Store configuration for globaldata
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Globaldata store
 */
export const Globaldata = createStoreFromRegistry('globaldata');
