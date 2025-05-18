import {Browser, Page} from 'puppeteer';
import {CdpSessionCallback} from '..';

/**
 * Run a callback with a CDP session
 */
export async function withCdpSession<T>(
  browserOrPage: Browser | Page,
  cb: CdpSessionCallback<T>
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
 * Clear browser cookies using CDP
 */
export async function clearBrowserCookies(browser: Browser): Promise<void> {
  await withCdpSession(browser, async client => client.send('Network.clearBrowserCookies'));
}
