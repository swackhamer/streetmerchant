/**
 * Store configuration for xtremmedia
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Xtremmedia store
 */
export const Xtremmedia = createStoreFromRegistry('xtremmedia');
