/**
 * Store configuration for topachat
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Topachat store
 */
export const Topachat = createStoreFromRegistry('topachat');
