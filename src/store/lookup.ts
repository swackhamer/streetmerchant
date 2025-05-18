/**
 * Store lookup functionality
 * 
 * Responsible for looking up information about each product within stores.
 */
import {Browser, HTTPResponse, Page} from 'puppeteer';
import * as abortctl from '../abortctl';
import {getStores, Link, Store} from './model';
import {Print, logger} from '../logger';
import {
  delay,
  getSleepTime,
  isStatusCodeInRange,
  logUnexpectedError,
} from '../util';
import {config} from '../config';
import {refreshLinksBuilder} from './fetch-links';
import {filterStoreLink} from './filter';
import open from 'open';
import {processBackoffDelay} from './model/helpers/backoff';
import {sendNotification} from '../messaging';
import {processCookieHandling, tryUsingPage, usingBrowser} from '../browser';
import {addTimeout} from '../timers';
import {
  runCaptchaDeterrent,
  handleResponse,
  isItemInStock,
  takeScreenshot
} from './lookup-modules';

// Track in-stock status to prevent repeated notifications
const inStock: Record<string, boolean> = {};

/**
 * Check if a store should be processed in the current execution context
 */
function storeShouldRun(store: Store): boolean {
  // Stop if the store code is being aborted or main application loop is stopping
  if (!abortctl.available('app.running') || !abortctl.available(`store.${store.name}`)) {
    return false;
  }
  return true;
}

/**
 * Responsible for looking up information about each product within a `Store`.
 * 
 * @param browser Puppeteer browser.
 * @param store Vendor of items.
 */
export async function lookup(browser: Browser, store: Store): Promise<void> {
  if (!storeShouldRun(store)) {
    // store has been disabled or main application loop is stopping
    return;
  }

  // Get fresh links if using links builder
  await refreshLinksBuilder(browser, store);

  /* eslint-disable no-await-in-loop */
  for (const link of store.links) {
    if (!storeShouldRun(store)) {
      // store has been disabled or main application loop is stopping
      return;
    }

    if (!filterStoreLink(link)) {
      // filter for store links within the lookup loop as watched brands, series
      // etc may have been updated externally
      continue;
    }

    if (config.page.inStockWaitTime && inStock[link.url]) {
      logger.info(Print.inStockWaiting(link, store, true));
      continue;
    }

    await tryUsingPage(browser, store, page =>
      lookupItem(browser, store, page, link)
    );
  }
}

/**
 * Look up a single item
 */
async function lookupItem(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link
): Promise<void> {
  let statusCode = 0;

  try {
    // Run captcha deterrent if configured
    if (store.captchaDeterrent) {
      await runCaptchaDeterrent(browser, store, page);
    }

    // Perform the actual lookup
    statusCode = await performItemLookup(browser, store, page, link);
  } catch (error: unknown) {
    // Handle errors
    logLookupError(store, link, error);
  } finally {
    // Apply cookie handling and backoff delay regardless of success/failure
    await processCookieHandling(browser, store, link, statusCode);
    await processBackoffDelay(store, link, statusCode);
  }
}

/**
 * Log an error that occurred during item lookup
 */
function logLookupError(store: Store, link: Link, error: unknown): void {
  const labels = [`[${store.name}]`, link.brand, link.series, link.model];

  if (store.currentProxyIndex !== undefined && store.proxyList) {
    const proxy = `${store.currentProxyIndex + 1}/${store.proxyList.length}`;
    labels.unshift(`[${proxy}]`);
  }

  const message = error instanceof Error ? error.message : `${error}`;
  logger.error(`✖ ${labels.join(' ')} - ${message}`);
}

/**
 * Perform the actual lookup for an item
 */
async function performItemLookup(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link
): Promise<number> {
  // Navigate to the item page
  const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0';
  const response: HTTPResponse | null = await page.goto(link.url, {
    waitUntil: givenWaitFor,
  });

  // Handle the HTTP response
  const successStatusCodes = store.successStatusCodes ?? [[0, 399]];
  const statusCode = await handleResponse(browser, store, page, link, response);

  // Return early if response wasn't successful
  if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
    return statusCode;
  }

  // Check if the item is in stock
  if (await isItemInStock(store, page, link)) {
    // Handle in-stock scenario
    await handleInStockItem(browser, store, page, link);
  }

  return statusCode;
}

/**
 * Handle an item that is found to be in stock
 */
async function handleInStockItem(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link
): Promise<void> {
  // Determine the URL to use (cart URL if auto-add is enabled)
  const givenUrl = link.cartUrl && config.store.autoAddToCart 
    ? link.cartUrl 
    : link.url;

  // Log the in-stock item
  logger.info(`${Print.inStock(link, store, true)}\n${givenUrl}`);

  // Open browser if configured
  if (config.browser.open) {
    await (link.openCartAction === undefined
      ? open(givenUrl)
      : link.openCartAction(browser));
  }

  // Send notification
  sendNotification(link, store);

  // Handle waiting time between checks for the same item
  if (config.page.inStockWaitTime) {
    inStock[link.url] = true;

    addTimeout(() => {
      inStock[link.url] = false;
    }, 1000 * config.page.inStockWaitTime);
  }

  // Take screenshot if configured
  if (config.page.screenshot) {
    await takeScreenshot(page, link, 'success');
  }
}

/**
 * Schedule a series of lookups for all configured stores
 */
export async function lookupAllStores(browser: Browser): Promise<void> {
  // Get stores from config
  const configuredStores = config.store.stores.map(storeConfig => storeConfig.name);
  
  // Log which stores are being processed
  if (process.env.STORES) {
    logger.info(`Using stores from .env: ${configuredStores.join(', ')}`);
  } else {
    logger.info(`Using default stores: ${configuredStores.join(', ')}`);
  }
  
  // Only process stores that are configured in STORES env var
  const stores = getStores().filter(store => {
    // Check if this store is in the configured list
    const isConfigured = configuredStores.includes(store.name);
    
    if (!isConfigured) {
      logger.debug(`Skipping store ${store.name} as it's not in STORES configuration`);
    }
    
    return isConfigured;
  });
  
  // Log the stores being processed
  logger.info(`Processing ${stores.length} configured stores`);
  
  // Process all stores in parallel
  const lookups = stores.map(store =>
    usingBrowser(store, browser => lookup(browser, store))
  );
  await Promise.all(lookups);
}