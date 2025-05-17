/**
 * Browser Session Management
 * 
 * This file implements a class-based approach to browser session management,
 * consolidating the various browser handling functions into a single cohesive API.
 */
import fs from 'node:fs';
import path from 'node:path';
import {sync as deleteSync} from 'del';
import {Browser, CDPSession, LaunchOptions, Page} from 'puppeteer';
import Puppeteer from 'puppeteer';
import * as abortctl from '../abortctl';
import {disableBlockerInPage, enableBlockerInPage} from '../adblocker';
import {config} from '../config';
import {logger} from '../logger';
import {onRequest, onResponse} from '../handlers';
import {nextStoreProxy, parseProxy, Proxy} from '../proxy';
import {Store} from '../store/model';
import {getRandomUserAgent, logUnexpectedError} from '../util';

/**
 * Enum for cookie handling strategies
 */
enum CookiePolicy {
  DEFAULT = 'default',
  KEEP_WHILE_200 = 'keep_while_200',
}

/**
 * Interface for browser instance tracking
 */
interface BrowserInstance {
  browser: Promise<Browser>;
  proxy?: Proxy;
  userDataDir: string;
}

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
    return new BrowserSession(browser, store);
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
        logger.debug(
          `ℹ [${store.name}] restarting browser instance with proxy: ${proxy?.server}`
        );
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
  private static async createBrowser(store: Store, proxy?: Proxy): Promise<Browser> {
    abortctl.assert('browser');
    
    const userDataDir = path.join(config.browser.profileParentDir, store.name);
    
    // Delete Chrome profile to prevent proxy authentication issues
    const userDataDelGlobs = [
      userDataDir.replaceAll('\\', '/') + '/Default/*',
      '!' + userDataDir.replaceAll('\\', '/') + '/Default/Cache',
    ];
    deleteSync(userDataDelGlobs, {force: true});
    
    const userAgent = await this.getDefaultUserAgent();
    const browserPromise = this.launchBrowser({userDataDir}, proxy, userAgent);
    this.instances.set(store, {browser: browserPromise, proxy, userDataDir});
    
    const browser = await browserPromise;
    
    // Delete cookies on browser start
    await this.withCdpSession(browser, async client =>
      client.send('Network.clearBrowserCookies')
    );
    
    return browser;
  }
  
  /**
   * Launches a browser with appropriate configuration
   */
  private static async launchBrowser(
    options?: LaunchOptions,
    proxy?: Proxy,
    userAgent?: string
  ): Promise<Browser> {
    const args: string[] = [
      '--disable-blink-features=AutomationControlled',
      `--window-size=${config.page.width},${config.page.height}`,
    ];
    
    if (userAgent) {
      args.push(`--user-agent=${userAgent}`);
    }
    
    // Skip Chromium Linux Sandbox if trusted or in Docker
    if (config.browser.isTrusted || config.docker) {
      args.push('--no-sandbox');
    }
    
    if (config.docker) {
      config.browser.open = false;
    }
    
    // Enable headless (force if docker)
    if (config.browser.isHeadless || config.docker || options?.headless) {
      if (options && 'headless' in options) {
        options = Object.assign({}, options);
        delete options.headless;
      }
      
      args.push(
        '--headless=new',
        '--ozone-platform-hint=auto',
        `--ozone-override-screen-size=${config.page.width},${config.page.height}`
      );
      
      // Handle GPU acceleration
      let gpuAcceleration = false;
      
      switch (process.platform) {
        case 'darwin':
          args.push('--angle=metal');
          gpuAcceleration = true;
          break;
          
        case 'linux':
          if (fs.existsSync('/dev/dri/renderD128')) {
            args.push(
              '--disable-vulkan-surface',
              '--enable-features=Vulkan',
              '--enable-unsafe-webgpu',
              '--use-angle=vulkan',
              '--enable-features=AcceleratedVideoEncoder'
            );
            gpuAcceleration = true;
          }
          break;
      }
      
      if (!gpuAcceleration) {
        args.push('--disable-gpu');
      }
    }
    
    // Add proxy configuration
    if (proxy) {
      args.push(`--proxy-server=${proxy.server}`);
    }
    
    if (args.length > 0) {
      logger.debug('ℹ puppeteer config: ', args.toSorted());
    }
    
    const browser = await Puppeteer.launch({
      args,
      defaultViewport: null,
      handleSIGHUP: false,
      handleSIGINT: false,
      handleSIGTERM: false,
      headless: false, // explicitly specified in args
      protocolTimeout: config.page.protocolTimeout,
      ...options,
    });
    
    // Set up page configuration
    const openPages = new Map<Page, Promise<void>>();
    await this.setNewPageDefaultOptions(openPages, browser, proxy);
    
    return browser;
  }
  
  /**
   * Configure default options for new pages
   */
  private static async setNewPageDefaultOptions(
    pages: Map<Page, Promise<void>>,
    browser: Browser,
    proxy?: Proxy
  ): Promise<void> {
    const targetCreated = async (page: Page) => {
      let promise = pages.get(page);
      
      if (promise) {
        return promise;
      }
      
      // Configure page options
      promise = new Promise<void>(async resolve => {
        try {
          page.setDefaultNavigationTimeout(config.page.timeout);
          
          const promises: Promise<void>[] = [
            page.setRequestInterception(true),
            enableBlockerInPage(page),
          ];
          
          if (proxy?.credentials) {
            promises.push(page.authenticate(proxy.credentials));
          }
          
          if (!config.browser.userAgentKeepDefault) {
            const userAgent = getRandomUserAgent();
            promises.push(page.setUserAgent(userAgent));
          }
          
          await Promise.all(promises);
          
          // Set up event handlers
          page.on('request', request => onRequest(page, request));
          page.on('response', response => onResponse(page, response));
          
          resolve();
        } catch (err) {
          if (!abortctl.available('app.running')) {
            // Only log non-protocol errors
            if (
              !(err instanceof Error) ||
              !(
                err.message.includes('Protocol error') ||
                err.message.includes('Target closed')
              )
            ) {
              logger.error(`✖ error registering new page defaults: ${err}`);
            }
          }
          resolve();
        }
      });
      
      pages.set(page, promise);
    };
    
    // Apply options to existing pages
    await Promise.all([...(await browser.pages()).values()].map(targetCreated));
    
    // Monitor for new pages
    browser.on('targetcreated', async target => {
      const maybePage = await target.page();
      if (maybePage) {
        await targetCreated(maybePage);
      }
    });
    
    browser.on('targetdestroyed', async target => {
      const maybePage = await target.page();
      if (maybePage) {
        pages.delete(maybePage);
      }
    });
    
    // Override browser.newPage to apply our options
    const _newPage = browser.newPage;
    browser.newPage = async () => {
      const page = await _newPage.bind(browser)();
      await targetCreated(page);
      return page;
    };
  }
  
  /**
   * Run a callback with a CDP session
   */
  private static async withCdpSession<T>(
    browserOrPage: Browser | Page,
    cb: (client: CDPSession) => Promise<T>
  ): Promise<T> {
    let isNewPage: boolean;
    let page: Page;
    
    if (browserOrPage instanceof Page) {
      page = browserOrPage;
      isNewPage = false;
    } else {
      const pages = await browserOrPage.pages();
      isNewPage = pages.length === 0;
      if (isNewPage) {
        page = await browserOrPage.newPage();
      } else {
        page = pages[0];
      }
    }
    
    const client = await page.createCDPSession();
    try {
      return await cb(client);
    } finally {
      if (isNewPage) {
        await page.close({runBeforeUnload: false}).catch(() => {});
      }
    }
  }
  
  /**
   * Get the default user agent
   */
  private static async getDefaultUserAgent(): Promise<string | undefined> {
    if (this.defaultUserAgent || !config.browser.userAgentKeepDefault) {
      return this.defaultUserAgent;
    }
    
    let browser: Browser | undefined;
    
    try {
      browser = await this.launchBrowser({
        headless: true,
        userDataDir: path.join(config.browser.profileParentDir, 'default'),
      });
      
      this.defaultUserAgent = await browser.userAgent();
      
      // Remove headless from the default user agent
      if (this.defaultUserAgent.includes('Headless')) {
        this.defaultUserAgent = this.defaultUserAgent.replaceAll(/headless/gi, '');
      }
    } catch {
      // noop
    } finally {
      if (browser) {
        try {
          await browser.close();
        } catch {
          // noop
        }
      }
    }
    
    return this.defaultUserAgent;
  }
  
  /**
   * Determine cookie policy based on configuration
   */
  private static getCookiePolicy(): CookiePolicy {
    let cookiePolicy: CookiePolicy;
    if (
      (Object.values(CookiePolicy) as string[]).includes(
        config.browser.cookiePolicy.toLowerCase()
      )
    ) {
      cookiePolicy = config.browser.cookiePolicy as CookiePolicy;
    } else if (config.browser.cookiePolicy === '') {
      cookiePolicy = CookiePolicy.DEFAULT;
    } else {
      logger.warn(
        `✖ invalid value COOKIE_POLICY=${config.browser.cookiePolicy} defaulting to: ${CookiePolicy.DEFAULT}`
      );
      cookiePolicy = CookiePolicy.DEFAULT;
    }
    logger.debug(`ℹ using cookie policy: ${cookiePolicy}`);
    return cookiePolicy;
  }
  
  /**
   * Constructor - private to enforce factory pattern
   */
  private constructor(
    private readonly browser: Browser,
    private readonly store: Store
  ) {}
  
  /**
   * Use a page for processing
   */
  public async withPage<T>(callback: (page: Page) => Promise<T>): Promise<T> {
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
  public async tryWithPage<T>(callback: (page: Page) => Promise<T>): Promise<T | undefined> {
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
      await BrowserSession.withCdpSession(this.browser, async client =>
        client.send('Network.clearBrowserCookies')
      );
    }
  }
  
  /**
   * Clean up a page after use
   */
  private async cleanupPage(page: Page): Promise<void> {
    await page.close({runBeforeUnload: false});
    
    if (BrowserSession.cookiePolicy === CookiePolicy.DEFAULT) {
      await BrowserSession.withCdpSession(this.browser, async client =>
        client.send('Network.clearBrowserCookies')
      );
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
      [...BrowserSession.instances.entries()].map(
        async ([store, {browser: browserPromise}]) => {
          try {
            const browser = await browserPromise;
            await browser.close();
          } catch (error) {
            logger.error('✖ failed to close browser', error);
          } finally {
            BrowserSession.instances.delete(store);
          }
        }
      )
    );
  }
  
  /**
   * Enable browser contexts
   */
  public static enableBrowserContexts(): void {
    abortctl.create('browser');
  }
}