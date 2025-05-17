/**
 * Store configuration for bpmpower
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Bpmpower store
 */
export const Bpmpower = createStoreFromRegistry('bpmpower');
