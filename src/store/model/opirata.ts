/**
 * Store configuration for opirata
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Opirata store
 */
export const Opirata = createStoreFromRegistry('opirata');
