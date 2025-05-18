import {Page} from 'puppeteer';
import {Store, Link} from '../../../store/model/store';
import {config} from '../../../config';
import {logger} from '../../../logger';

/**
 * Take a screenshot of the current page
 */
export async function takeScreenshot(page: Page, store: Store, link: Link): Promise<void> {
  try {
    const screenshotPath = generateScreenshotPath(store, link);
    await page.screenshot({
      path: screenshotPath,
      fullPage: config.page.screenshotFullPage,
    });
    logger.debug(`ℹ screenshot saved to ${screenshotPath}`);
  } catch (error) {
    logger.error(`✖ failed to take screenshot: ${error}`);
  }
}

/**
 * Generate a path for a screenshot
 */
export function generateScreenshotPath(store: Store, link: Link): string {
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
  const filename = `${store.name}_${link.brand}_${link.model}_${timestamp}.png`;
  return `${config.page.screenshotDir}/${filename}`;
}
