/**
 * Store configuration for euronics-de
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Euronics-de store
 */
export const EuronicsDe = createStoreFromRegistry('euronics-de');
