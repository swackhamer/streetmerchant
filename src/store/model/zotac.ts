/**
 * Store configuration for zotac
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Zotac store
 */
export const Zotac = createStoreFromRegistry('zotac');
