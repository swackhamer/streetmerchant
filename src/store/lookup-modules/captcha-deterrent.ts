/**
 * Captcha deterrent functionality
 */
import {Browser, Page} from 'puppeteer';
import {logger} from '../../logger';
import {Store} from '../model';
import {getSleepTime, delay} from '../../util';

/**
 * Run a captcha deterrent sequence on a page
 * This helps avoid being detected as a bot by search or clicking around
 */
export async function runCaptchaDeterrent(
  browser: Browser,
  store: Store,
  page: Page
): Promise<void> {
  const deterrent = store.captchaDeterrent;
  if (!deterrent) {
    return;
  }

  logger.debug(`ℹ [${store.name}] running captcha deterrent`);

  // Either search for specific terms or visit hard-coded links
  if (deterrent.searchUrl && deterrent.searchTerms?.length) {
    await runSearchDeterrent(store, page, deterrent.searchUrl, deterrent.searchTerms);
  } else if (deterrent.hardLinks?.length) {
    await visitRandomPages(store, page, deterrent.hardLinks);
  }
}

/**
 * Perform a random search to appear as a regular user
 */
async function runSearchDeterrent(
  store: Store,
  page: Page,
  searchUrl: string,
  searchTerms: string[]
): Promise<void> {
  try {
    // Choose a random search term
    const searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    logger.debug(`ℹ [${store.name}] searching for: ${searchTerm}`);

    // Navigate to the search page
    await page.goto(searchUrl, {waitUntil: 'domcontentloaded'});
    await delay(getSleepTime(store) / 2);

    // Type the search term and submit
    await page.keyboard.type(searchTerm);
    await page.keyboard.press('Enter');
    await delay(getSleepTime(store));
  } catch (error) {
    logger.debug(`✖ [${store.name}] search deterrent failed: ${error}`);
  }
}

/**
 * Visit several random pages before checking stock
 */
async function visitRandomPages(store: Store, page: Page, links: string[]): Promise<void> {
  // Choose a random number of pages to visit (1-3)
  const pagesToVisit = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < pagesToVisit; i++) {
    try {
      // Choose a random link
      const randomLink = links[Math.floor(Math.random() * links.length)];
      logger.debug(`ℹ [${store.name}] visiting random page: ${randomLink}`);

      // Visit the page
      await page.goto(randomLink, {waitUntil: 'domcontentloaded'});
      await delay(getSleepTime(store));
    } catch (error) {
      logger.debug(`✖ [${store.name}] random page visit failed: ${error}`);
    }
  }
}
