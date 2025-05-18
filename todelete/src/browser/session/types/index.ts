import {Browser, CDPSession, LaunchOptions, Page} from 'puppeteer';
import {Proxy as ProxyConfig} from '../../../proxy';
import {Store} from '../../../store/model/store';

/**
 * Enum for cookie handling strategies
 */
export enum CookiePolicy {
  DEFAULT = 'default',
  KEEP_WHILE_200 = 'keep_while_200',
}

/**
 * Interface for browser instance tracking
 */
export interface BrowserInstance {
  browser: Promise<Browser>;
  proxy?: ProxyConfig;
  userDataDir: string;
}

/**
 * Interface for browser launch configuration
 */
export interface BrowserLaunchConfig {
  options?: LaunchOptions;
  proxy?: ProxyConfig;
  userAgent?: string;
}

/**
 * Callback type for operations with a page
 */
export type PageCallback<T> = (page: Page) => Promise<T>;

/**
 * Callback type for operations with a CDP session
 */
export type CdpSessionCallback<T> = (client: CDPSession) => Promise<T>;
