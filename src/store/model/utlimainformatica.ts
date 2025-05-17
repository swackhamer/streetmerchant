/**
 * Store configuration for utlimainformatica
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Utlimainformatica store
 */
export const Utlimainformatica = createStoreFromRegistry('utlimainformatica');
