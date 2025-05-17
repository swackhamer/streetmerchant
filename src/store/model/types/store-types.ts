/**
 * Store type definitions
 */
import {Browser, PuppeteerLifeCycleEvent} from 'puppeteer';
import {Labels} from './label-types';
import {Link, LinksBuilder, LinkTemplate} from './link-types';
import {CaptchaDeterrent} from './label-types';

/**
 * Status code range array for response handling
 */
export type StatusCodeRangeArray = Array<number | [number, number]>;

/**
 * Store configuration structure
 */
export type Store = {
  realTimeInventoryLookup?: (itemNumber: string) => Promise<boolean>;
  /**
   * The range of status codes which will trigger backoff, i.e. an increasing
   * delay between requests. Setting an empty array will disable the feature.
   * If not defined, the default range will be used: 403.
   */
  backoffStatusCodes?: StatusCodeRangeArray;
  disableAdBlocker?: boolean;
  links: Link[];
  linksBuilder?: LinksBuilder;
  /**
   * Link templates for generating dynamic product URLs using placeholders
   */
  linkTemplates?: LinkTemplate[];
  labels: Labels;
  name: string;
  country: string;
  currency: '£' | '$' | '€' | 'R$' | 'kr.' | '';
  setupAction?: (browser: Browser) => Promise<void>;
  /**
   * The range of status codes which considered successful, i.e. without error
   * allowing request parsing to continue. Setting an empty array will cause
   * all requests to fail. If not defined, the default range will be used:
   * 0 -> 399 inclusive.
   */
  successStatusCodes?: StatusCodeRangeArray;
  waitUntil?: PuppeteerLifeCycleEvent;
  minPageSleep?: number;
  maxPageSleep?: number;

  proxyList?: string[];
  currentProxyIndex?: number;
  captchaDeterrent?: CaptchaDeterrent;
};