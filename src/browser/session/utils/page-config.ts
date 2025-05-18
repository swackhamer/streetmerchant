import {Browser, Page} from 'puppeteer';
import {enableBlockerInPage} from '../../../adblocker';
import {config} from '../../../config';
import {logger} from '../../../logger';
import {onRequest, onResponse} from '../../../handlers';
import {Proxy as ProxyConfig} from '../../../proxy';
import * as abortctl from '../../../abortctl';
import {getUserAgent} from './browser-config';

/**
 * Configure and set up page defaults
 */
export async function configureNewPage(page: Page, proxy?: ProxyConfig): Promise<void> {
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
      const userAgent = await getUserAgent(page);
      promises.push(page.setUserAgent(userAgent));
    }

    await Promise.all(promises);

    // Set up event handlers
    page.on('request', request => onRequest(page, request));
    page.on('response', response => onResponse(page, response));
  } catch (err) {
    if (!abortctl.available('app.running')) {
      // Only log non-protocol errors
      if (
        !(err instanceof Error) ||
        !(err.message.includes('Protocol error') || err.message.includes('Target closed'))
      ) {
        logger.error(`✖ error registering new page defaults: ${err}`);
      }
    }
  }
}

/**
 * Configure all pages in a browser to use default options
 */
export async function configureBrowserPages(
  browser: Browser,
  proxy?: ProxyConfig
): Promise<Map<Page, Promise<void>>> {
  const pages = new Map<Page, Promise<void>>();

  const targetCreated = async (page: Page) => {
    let promise = pages.get(page);

    if (promise) {
      return promise;
    }

    // Configure page options
    promise = configureNewPage(page, proxy).then(() => {});
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

  return pages;
}
