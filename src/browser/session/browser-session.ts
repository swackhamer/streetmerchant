/**
 * Browser Session Management
 *
 * This file implements a class-based approach to browser session management,
 * consolidating the various browser handling functions into a single cohesive API.
 */
import path from 'node:path';
import * as abortctl from '../../abortctl';
import {disableBlockerInPage} from '../../adblocker';
import {config} from '../../config';
import {logger} from '../../logger';
import {nextStoreProxy, parseProxy, Proxy as ProxyConfig} from '../../proxy';
import {Store} from '../../store/model/store';
import {logUnexpectedError} from '../../util';
import {Browser, Page} from 'puppeteer';
import {BrowserInstance, CookiePolicy, PageCallback} from '.';
import {
  clearBrowserCookies,
  cleanUserDataDir,
  getCookiePolicy,
  getDefaultUserAgent,
  launchBrowser,
} from './utils';

/**
 * BrowserSession class for encapsulating browser lifecycle management
 */
export class BrowserSession {
  private static instances = new Map<Store, BrowserInstance>();
  private static defaultUserAgent?: string;
  private static cookiePolicy = BrowserSession.getCookiePolicy();
  private static defaultProxy = parseProxy(config.proxy.address, config);

  /**
   * Creates a new BrowserSession for a store or reuses an existing one
   */
  public static async create(store: Store): Promise<BrowserSession> {
    const browser = await this.getBrowserForStore(store);
    return new BrowserSession(store, {browser});
  }

  /**
   * Gets or creates a browser for a store
   */
  private static async getBrowserForStore(store: Store): Promise<Browser> {
    const instance = this.instances.get(store);
    const proxy = nextStoreProxy(store) ?? this.defaultProxy;

    if (instance) {
      const browser = await instance.browser;
      if (proxy !== instance.proxy) {
        logger.debug(`ℹ [${store.name}] restarting browser instance with proxy: ${proxy?.server}`);
        await browser.close();
        this.instances.delete(store);
        return await this.createBrowser(store, proxy);
      } else {
        logger.debug(`ℹ [${store.name}] reusing browser instance`);
        return browser;
      }
    } else {
      logger.debug(`ℹ [${store.name}] creating new browser instance`);
      return await this.createBrowser(store, proxy);
    }
  }

  /**
   * Creates a new browser instance
   */
  private static async createBrowser(store: Store, proxy?: ProxyConfig): Promise<Browser> {
    try {
      // Make sure browser context is available
      abortctl.assert('browser');

      const userDataDir = path.join(config.browser.profileParentDir, store.name);
      cleanUserDataDir(userDataDir);

      const userAgent = await this.getDefaultUserAgent();
      const browserPromise = launchBrowser({
        options: {userDataDir},
        proxy,
        userAgent,
      });

      this.instances.set(store, {browser: browserPromise, proxy, userDataDir});
      return await browserPromise;
    } catch (error) {
      // If we get an AsyncContextError, try re-enabling the browser context
      if (error instanceof abortctl.AsyncContextError) {
        logger.warn(`ℹ [${store.name}] browser context not available, re-enabling`);
        abortctl.create('browser');

        // Try again after enabling the context
        const userDataDir = path.join(config.browser.profileParentDir, store.name);
        cleanUserDataDir(userDataDir);

        const userAgent = await this.getDefaultUserAgent();
        const browserPromise = launchBrowser({
          options: {userDataDir},
          proxy,
          userAgent,
        });

        this.instances.set(store, {browser: browserPromise, proxy, userDataDir});
        return await browserPromise;
      }
      throw error;
    }
  }

  /**
   * Get the default user agent
   */
  private static async getDefaultUserAgent(): Promise<string | undefined> {
    if (this.defaultUserAgent) {
      return this.defaultUserAgent;
    }

    this.defaultUserAgent = await getDefaultUserAgent();
    return this.defaultUserAgent;
  }

  /**
   * Determine cookie policy based on configuration
   */
  private static getCookiePolicy(): CookiePolicy {
    return getCookiePolicy();
  }

  /**
   * Constructor - can be created directly with options or via factory method
   */
  private browser: Browser;

  constructor(private readonly store: Store, options: {browser: Browser}) {
    if (options.browser) {
      this.browser = options.browser;
    } else {
      throw new Error('Browser must be provided');
    }
  }

  /**
   * Use a page for processing
   */
  public async withPage<T>(callback: PageCallback<T>): Promise<T> {
    const page = await this.browser.newPage();
    try {
      if (this.store.disableAdBlocker) {
        await disableBlockerInPage(page);
      }
      return await callback(page);
    } finally {
      await this.cleanupPage(page);
    }
  }

  /**
   * Try to use a page, handling errors gracefully
   */
  public async tryWithPage<T>(callback: PageCallback<T>): Promise<T | undefined> {
    try {
      return await this.withPage(callback);
    } catch (error) {
      // Don't log protocol errors as they're expected
      if (
        !(error instanceof Error) ||
        !(
          error.message.includes('Protocol error') ||
          error.message.includes('Target closed') ||
          error.message.includes('frame was detached')
        )
      ) {
        logUnexpectedError(error);
      }
      return undefined;
    }
  }

  /**
   * Process cookie handling based on policy
   */
  public async processCookies(statusCode: number): Promise<void> {
    let deleteCookies = false;
    switch (BrowserSession.cookiePolicy) {
      case CookiePolicy.KEEP_WHILE_200:
        if (statusCode !== 200) {
          logger.debug(
            `ℹ [${this.store.name}] clearing browser cookies due to non-200 status code: ${statusCode}`
          );
          deleteCookies = true;
        }
        break;
    }

    if (deleteCookies) {
      await clearBrowserCookies(this.browser);
    }
  }

  /**
   * Clean up a page after use
   */
  private async cleanupPage(page: Page): Promise<void> {
    await page.close({runBeforeUnload: false});

    if (BrowserSession.cookiePolicy === CookiePolicy.DEFAULT) {
      await clearBrowserCookies(this.browser);
    }
  }

  /**
   * Close the session and clean up resources
   */
  public async close(): Promise<void> {
    try {
      await this.browser.close();
    } catch (error) {
      logger.error('✖ failed to close browser', error);
    } finally {
      BrowserSession.instances.delete(this.store);
    }
  }

  /**
   * Close all browser sessions
   */
  public static async closeAll(): Promise<void> {
    abortctl.destroy('browser');

    await Promise.all(
      [...BrowserSession.instances.entries()].map(async ([store, {browser: browserPromise}]) => {
        try {
          const browser = await browserPromise;
          await browser.close();
        } catch (error) {
          logger.error('✖ failed to close browser', error);
        } finally {
          BrowserSession.instances.delete(store);
        }
      })
    );
  }

  /**
   * Enable browser contexts
   */
  public static enableBrowserContexts(): void {
    abortctl.create('browser');
  }
}
