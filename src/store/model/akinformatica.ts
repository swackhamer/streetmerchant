/**
 * Store configuration for akinformatica
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Akinformatica store
 */
export const Akinformatica = createStoreFromRegistry('akinformatica');
