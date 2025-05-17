/**
 * Store configuration for rosman-melb
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Rosman-melb store
 */
export const RosmanMelb = createStoreFromRegistry('rosman-melb');
