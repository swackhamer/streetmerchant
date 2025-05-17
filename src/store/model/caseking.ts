/**
 * Store configuration for caseking
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Caseking store
 */
export const Caseking = createStoreFromRegistry('caseking');
