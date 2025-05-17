import {Page} from 'puppeteer';
import {config} from '../../../config';
import {logger} from '../../../logger';
import {sendNotification} from '../../../messaging/notification';
import {Store, Link} from '../../../store/model/store';
import {delay, logUnexpectedError} from '../../../util';
import {hasCaptcha} from './label-utils';

/**
 * Check if a page has a captcha and attempt to handle it
 */
export async function checkAndHandleCaptcha(
  pageContent: string, 
  page: Page,
  store: Store
): Promise<boolean> {
  // Check if captcha is present
  if (hasCaptcha(pageContent, store.labels.captcha)) {
    logger.debug(`ℹ [${store.name}] captcha detected`);
    return await handleCaptcha(page, store);
  }
  
  return false;
}

/**
 * Handle a captcha on the page
 */
export async function handleCaptcha(page: Page, store: Store): Promise<boolean> {
  // Only attempt captcha handling if the service is configured
  if (!config.captchaHandler.service) {
    logger.debug(`ℹ [${store.name}] captcha detected but no handler configured`);
    
    // Wait for manual solving if configured
    if (config.captchaHandler.responseTimeout > 0) {
      logger.info(
        `ℹ [${store.name}] waiting ${config.captchaHandler.responseTimeout}s for manual captcha solving`
      );
      
      // Send notification about captcha
      const captchaLink: Link = {
        brand: 'captcha-deterrent',
        model: 'captcha-deterrent',
        series: 'captcha-deterrent',
        url: 'captcha'
      };
      sendNotification(captchaLink, store);
      
      // Wait for the timeout
      await delay(config.captchaHandler.responseTimeout * 1000);
      return true;
    }
    
    return false;
  }
  
  try {
    logger.debug(`ℹ [${store.name}] attempting to solve captcha`);
    
    // Captcha handling implementation would go here
    // This would integrate with captcha solving services
    
    // For now, wait for configured timeout as placeholder
    await delay(config.captchaHandler.responseTimeout * 1000);
    
    return false; // Placeholder - would return true if solved
  } catch (error) {
    logUnexpectedError(error);
    return false;
  }
}