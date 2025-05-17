/**
 * Store configuration for canadacomputers
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Canadacomputers store
 */
export const Canadacomputers = createStoreFromRegistry('canadacomputers');
