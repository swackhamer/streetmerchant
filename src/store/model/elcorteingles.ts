/**
 * Store configuration for elcorteingles
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Elcorteingles store
 */
export const Elcorteingles = createStoreFromRegistry('elcorteingles');
