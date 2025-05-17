/**
 * Store configuration for centrecom
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Centrecom store
 */
export const Centrecom = createStoreFromRegistry('centrecom');
