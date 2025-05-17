/**
 * HTTP response handling for store lookups
 */
import {Browser, HTTPResponse, Page} from 'puppeteer';
import {config} from '../../config';
import {logger} from '../../logger';
import {Link, Store} from '../model';
import {handleCaptchaAsync} from '../captcha-handler';
import fs from 'fs';
import path from 'path';

/**
 * Handle the HTTP response from a page load
 */
export async function handleResponse(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link,
  response: HTTPResponse | null
): Promise<number> {
  // Get the HTTP status code, default to 0 if response is null
  const statusCode = response?.status() ?? 0;
  
  // Log status code
  logger.debug(`ℹ [${store.name}] status code: ${statusCode}`);
  
  // Handle HTTP Error responses
  if (statusCode >= 400) {
    logger.debug(`ℹ [${store.name}] request failed, got status ${statusCode}`);
  }
  
  // Handle possible captchas
  if (await checkAndHandleCaptcha(browser, store, page, link, statusCode)) {
    // If captcha was handled, try to get the status code of the new page
    const newStatusCode = await getCurrentStatusCode(page);
    return newStatusCode ?? statusCode;
  }
  
  return statusCode;
}

/**
 * Check for and handle captchas if present
 */
async function checkAndHandleCaptcha(
  browser: Browser, 
  store: Store, 
  page: Page, 
  link: Link,
  statusCode: number
): Promise<boolean> {
  // Skip captcha check for certain status codes
  if (statusCode >= 400) {
    return false;
  }
  
  // Check if the page has captcha labels defined
  if (!store.labels.captcha) {
    return false;
  }
  
  // Get page content to check for captcha
  const pageContent = await page.content();
  
  try {
    // Check for captcha using the store's captcha selectors
    const captchaExists = await page.evaluate(() => {
      // Look for common captcha elements
      const captchaElements = document.querySelectorAll(
        'form[action*="captcha"], div[id*="captcha"], iframe[src*="captcha"], .g-recaptcha'
      );
      return captchaElements.length > 0;
    });
    
    if (captchaExists) {
      logger.debug(`ℹ [${store.name}] captcha detected, attempting to solve`);
      
      // Handle the captcha
      const captchaHandled = await handleCaptchaAsync(page, store);
      
      // Take a screenshot of the captcha if configured
      if (config.page.screenshot) {
        await takeScreenshot(page, link, 'captcha');
      }
      
      return captchaHandled;
    }
  } catch (error) {
    logger.debug(`✖ [${store.name}] error checking for captcha: ${error}`);
  }
  
  return false;
}

/**
 * Get the current HTTP status code of the page
 */
async function getCurrentStatusCode(page: Page): Promise<number | null> {
  try {
    // Try to get the status code from the current page
    return await page.evaluate(() => {
      // This only works if the response info is available in the window object
      return (window as any).performance?.getEntries?.()?.[0]?.responseStatus ?? null;
    });
  } catch (error) {
    return null;
  }
}

/**
 * Take a screenshot of the current page
 */
export async function takeScreenshot(
  page: Page, 
  link: Link, 
  type: 'success' | 'captcha' | 'error' = 'success'
): Promise<void> {
  try {
    // Create screenshots directory
    await fs.promises.mkdir(config.page.screenshotDir, {recursive: true});
    
    // Generate screenshot filename
    const filename = 
      `${type}-${link.brand}-${link.model}-${Date.now()}.png`;
    const screenshotPath = path.join(config.page.screenshotDir, filename);
    
    // Save the screenshot
    await page.screenshot({
      path: screenshotPath,
      fullPage: config.page.screenshotFullPage
    });
    
    // Update link with screenshot path
    link.screenshot = screenshotPath;
    
    logger.debug(`ℹ screenshot saved to ${screenshotPath}`);
  } catch (error) {
    logger.error(`✖ failed to take screenshot: ${error}`);
  }
}