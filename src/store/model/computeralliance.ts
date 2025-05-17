/**
 * Store configuration for computeralliance
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Computeralliance store
 */
export const Computeralliance = createStoreFromRegistry('computeralliance');
