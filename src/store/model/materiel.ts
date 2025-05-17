/**
 * Store configuration for materiel
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Materiel store
 */
export const Materiel = createStoreFromRegistry('materiel');
