import type {Browser, CDPSession, LaunchOptions} from 'puppeteer';
import {Page} from 'puppeteer';
import * as abortctl from './abortctl';
import {disableBlockerInPage} from './adblocker';
import {config} from './config';
import {logger} from './logger';
import type {Link, Store} from './store/model';
import {logUnexpectedError} from './util';
import {BrowserSession} from './browser/session/browser-session';

/**
 * Map to keep track of sessions for compatibility
 */
const sessionMap = new Map<Store, BrowserSession>();

/**
 * Legacy function using BrowserSession internally
 */
export async function usingBrowser<T>(
  store: Store,
  cb: (browser: Browser, store: Store) => Promise<T>
) {
  // Get or create session
  let session = sessionMap.get(store);
  if (!session) {
    session = await BrowserSession.create(store);
    sessionMap.set(store, session);
  }
  
  // Use the browser from the session
  return await cb(session['browser'], store);
}

/**
 * Legacy function using BrowserSession internally
 */
export async function abortBrowserContexts() {
  await BrowserSession.closeAll();
  sessionMap.clear();
}

/**
 * Legacy function using BrowserSession internally
 */
export function enableBrowserContexts() {
  BrowserSession.enableBrowserContexts();
}

/**
 * Legacy function using BrowserSession internally
 * 
 * This function isn't recommended for direct use anymore, but is kept
 * for backward compatibility.
 */
export async function launchBrowser(
  options?: LaunchOptions,
  proxy?: any,
  userAgent?: string
): Promise<Browser> {
  // Create a temporary store just for launching a browser
  const tempStore: Store = {
    name: 'temp-' + Date.now(),
    country: 'US',
    currency: '$',
    labels: {},
    links: []
  };
  
  // Create a session and extract the browser
  const session = await BrowserSession.create(tempStore);
  return session['browser'];
}

/**
 * Legacy function using BrowserSession internally
 */
export async function usingPage<T>(
  browser: Browser,
  store: Store,
  cb: (page: Page, browser: Browser) => Promise<T>
) {
  // Get the session for this store/browser or create a new one
  let session = sessionMap.get(store);
  if (!session) {
    session = new BrowserSession(browser, store); 
    sessionMap.set(store, session);
  }
  
  // Use the session's withPage method
  return await session.withPage(async (page) => {
    if (store.disableAdBlocker) {
      await disableBlockerInPage(page);
    }
    return await cb(page, browser);
  });
}

type UsingPageCallback<T> = (
  page: Page,
  browser: Browser
) => Promise<T | undefined>;

/**
 * Legacy function using BrowserSession internally
 */
export async function tryUsingPage<T>(
  browser: Browser,
  store: Store,
  cb: (page: Page, browser: Browser) => Promise<T | undefined>
): Promise<T>;

export async function tryUsingPage<T>(
  store: Store,
  cb: (page: Page, browser: Browser) => Promise<T | undefined>
): Promise<T>;

export async function tryUsingPage<T>(
  p1: Browser | Store,
  p2: Store | UsingPageCallback<T>,
  p3?: UsingPageCallback<T>
): Promise<T | undefined> {
  try {
    if (arguments.length === 3) {
      const browser = p1 as Browser;
      const store = p2 as Store;
      const callback = p3 as UsingPageCallback<T>;
      
      // Get or create session
      let session = sessionMap.get(store);
      if (!session) {
        session = new BrowserSession(browser, store);
        sessionMap.set(store, session);
      }
      
      return await session.tryWithPage(page => callback(page, browser));
    } else {
      const store = p1 as Store;
      const callback = p2 as UsingPageCallback<T>;
      
      // Get or create session
      let session = sessionMap.get(store);
      if (!session) {
        session = await BrowserSession.create(store);
        sessionMap.set(store, session);
      }
      
      return await session.tryWithPage(page => callback(page, session['browser']));
    }
  } catch (error) {
    // This should not happen as tryWithPage handles errors, but just in case
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
 * Legacy function using BrowserSession internally
 */
export async function processCookieHandling(
  browser: Browser,
  store: Store,
  link: Link,
  statusCode: number
) {
  // Get or create session
  let session = sessionMap.get(store);
  if (!session) {
    session = new BrowserSession(browser, store);
    sessionMap.set(store, session);
  }
  
  await session.processCookies(statusCode);
}

/**
 * Legacy function using BrowserSession internally
 */
export async function withCdpSession<T>(
  browserOrPage: Browser | Page,
  cb: (client: CDPSession) => Promise<T>
) {
  return await BrowserSession['withCdpSession'](browserOrPage, cb);
}
