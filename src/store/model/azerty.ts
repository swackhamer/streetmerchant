/**
 * Store configuration for azerty
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Azerty store
 */
export const Azerty = createStoreFromRegistry('azerty');
