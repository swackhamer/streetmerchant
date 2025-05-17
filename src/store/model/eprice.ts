/**
 * Store configuration for eprice
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Eprice store
 */
export const Eprice = createStoreFromRegistry('eprice');
