/**
 * Store configuration for currys
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Currys store
 */
export const Currys = createStoreFromRegistry('currys');
