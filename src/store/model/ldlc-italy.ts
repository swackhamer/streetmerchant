/**
 * Store configuration for ldlc-italy
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ldlc-italy store
 */
export const LdlcItaly = createStoreFromRegistry('ldlc-italy');
