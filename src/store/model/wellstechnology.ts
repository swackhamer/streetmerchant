/**
 * Store configuration for wellstechnology
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Wellstechnology store
 */
export const Wellstechnology = createStoreFromRegistry('wellstechnology');
