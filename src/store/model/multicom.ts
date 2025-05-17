/**
 * Store configuration for multicom
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Multicom store
 */
export const Multicom = createStoreFromRegistry('multicom');
