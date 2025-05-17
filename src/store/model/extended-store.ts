import {Link as BaseLink, Store as BaseStore} from './store';
import {Browser} from 'puppeteer';

/**
 * Extended Link interface with additional properties for validation
 */
export interface ExtendedLink extends BaseLink {
  /**
   * Indicates if this link is a duplicate of another link with the same URL
   */
  duplicate?: boolean;
}

/**
 * Extended Store interface with support for series-based link loading
 */
export interface SeriesStore extends BaseStore {
  /**
   * Setup action that loads links dynamically based on series
   */
  setupAction: (browser: Browser) => Promise<void>;
}