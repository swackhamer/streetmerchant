/**
 * Store configuration for alternate-nl
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Alternate-nl store
 */
export const AlternateNl = createStoreFromRegistry('alternate-nl');
