/**
 * Store configuration for ldlc-es
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Ldlc-es store
 */
export const LdlcEs = createStoreFromRegistry('ldlc-es');
