/**
 * Store configuration for box
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Box store
 */
export const Box = createStoreFromRegistry('box');
