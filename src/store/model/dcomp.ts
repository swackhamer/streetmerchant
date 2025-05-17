/**
 * Store configuration for dcomp
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Dcomp store
 */
export const Dcomp = createStoreFromRegistry('dcomp');
