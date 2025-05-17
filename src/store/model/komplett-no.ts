/**
 * Store configuration for komplett-no
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Komplett-no store
 */
export const KomplettNo = createStoreFromRegistry('komplett-no');
