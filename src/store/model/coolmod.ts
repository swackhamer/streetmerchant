/**
 * Store configuration for coolmod
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Coolmod store
 */
export const Coolmod = createStoreFromRegistry('coolmod');
