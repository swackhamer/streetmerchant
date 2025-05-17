/**
 * Store configuration for notebooksbilliger
 * Refactored to use store registry and centralized data approach
 */
import {createStoreFromRegistry} from './store-registry';

/**
 * Notebooksbilliger store
 */
export const Notebooksbilliger = createStoreFromRegistry('notebooksbilliger');
