/**
 * Store configuration for ldlc
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ldlc store
 */
export const Ldlc = createStoreFromRegistry('ldlc');
