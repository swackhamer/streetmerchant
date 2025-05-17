/**
 * Request Handler
 * 
 * This file implements a unified approach to handling HTTP requests and responses,
 * consolidating logic that was previously scattered across multiple files.
 * 
 * This is the recommended way to handle requests and responses in the application.
 */
import {Page, HTTPResponse} from 'puppeteer';
import {logger} from '../../logger';
import {Store, Link} from '../../store/model/store';
import {getSleepTime, delay, isStatusCodeInRange, logUnexpectedError} from '../../util';
import {config} from '../../config';
import {includesLabels} from '../../store/includes-labels';
import {sendNotification} from '../../messaging/notification';
import {BrowserSession} from '../../browser/session/browser-session';

/**
 * Options for making requests
 */
export interface RequestOptions {
  retries?: number;
  retryOn?: Array<number | [number, number]>;
  backoffOn?: Array<number | [number, number]>;
  waitTime?: number;
}

/**
 * Result of a request operation
 */
export interface ResponseResult {
  response: HTTPResponse;
  statusCode: number;
  pageContent: string;
  success: boolean;
}

/**
 * Unified request handling class
 */
export class RequestHandler {
  /**
   * Default number of retries
   */
  private static readonly DEFAULT_RETRIES = 3;
  
  /**
   * Constructor
   */
  constructor(
    private readonly store: Store,
    private readonly page: Page,
    private readonly browserSession: BrowserSession
  ) {}
  
  /**
   * Make a request with standardized error handling and retry logic
   */
  public async makeRequest(link: Link, options: RequestOptions = {}): Promise<ResponseResult> {
    const retries = options.retries ?? RequestHandler.DEFAULT_RETRIES;
    let attempt = 1;
    let lastStatusCode = 0;
    let response: HTTPResponse | null = null;
    let pageContent = '';
    
    while (attempt <= retries) {
      try {
        // Navigate to the URL
        logger.debug(`ℹ [${this.store.name}] navigating to ${link.url}`);
        response = await this.page.goto(link.url, {
          waitUntil: 'domcontentloaded',
        });
        
        // Get status code
        lastStatusCode = response?.status() ?? 0;
        
        // Get page content
        try {
          pageContent = await this.page.content();
        } catch (error) {
          logger.error(`✖ [${this.store.name}] unable to get page content: ${error}`);
          pageContent = '';
        }
        
        // Process cookies based on status code
        await this.browserSession.processCookies(lastStatusCode);
        
        // Check for success
        const isSuccess = this.isSuccessStatusCode(lastStatusCode);
        
        // Handle retry or backoff logic
        if (!isSuccess) {
          if (this.shouldRetry(lastStatusCode, options.retryOn)) {
            logger.debug(`ℹ [${this.store.name}] retrying due to status code: ${lastStatusCode}`);
            attempt++;
            
            if (attempt <= retries) {
              // Simple delay between retries
              await delay(getSleepTime(this.store));
              continue;
            }
          } else if (this.shouldBackoff(lastStatusCode, options.backoffOn)) {
            logger.debug(
              `ℹ [${this.store.name}] backing off due to status code: ${lastStatusCode}`
            );
            
            // Exponential backoff
            const backoffTime = this.calculateBackoff(attempt);
            logger.debug(`ℹ [${this.store.name}] backing off for ${backoffTime}ms`);
            await delay(backoffTime);
            
            attempt++;
            if (attempt <= retries) {
              continue;
            }
          }
        }
        
        // Check for captcha
        if (this.hasCaptcha(pageContent)) {
          logger.debug(`ℹ [${this.store.name}] captcha detected`);
          const captchaHandled = await this.handleCaptcha();
          
          if (captchaHandled) {
            // Refresh the page after captcha
            response = await this.page.reload({waitUntil: 'domcontentloaded'});
            lastStatusCode = response?.status() ?? 0;
            pageContent = await this.page.content();
          }
        }
        
        // Take screenshot if configured
        if (config.page.screenshot) {
          await this.takeScreenshot(link);
        }
        
        // Return the result
        return {
          response: response!,
          statusCode: lastStatusCode,
          pageContent,
          success: isSuccess && !!response,
        };
      } catch (error) {
        logger.error(`✖ [${this.store.name}] error during request: ${error}`);
        attempt++;
        
        if (attempt <= retries) {
          await delay(getSleepTime(this.store));
        }
      }
    }
    
    // Return a failure result if all retries exhausted
    return {
      response: response!,
      statusCode: lastStatusCode,
      pageContent,
      success: false,
    };
  }
  
  /**
   * Check if a status code indicates success
   */
  private isSuccessStatusCode(statusCode: number): boolean {
    if (this.store.successStatusCodes) {
      return isStatusCodeInRange(statusCode, this.store.successStatusCodes);
    }
    
    // Default success range: 200-299
    return statusCode >= 200 && statusCode <= 299;
  }
  
  /**
   * Check if we should retry based on status code
   */
  private shouldRetry(
    statusCode: number,
    retryOn?: Array<number | [number, number]>
  ): boolean {
    if (retryOn) {
      return isStatusCodeInRange(statusCode, retryOn);
    }
    
    // Default retry on server errors
    return statusCode >= 500 && statusCode <= 599;
  }
  
  /**
   * Check if we should back off based on status code
   */
  private shouldBackoff(
    statusCode: number,
    backoffOn?: Array<number | [number, number]>
  ): boolean {
    if (backoffOn) {
      return isStatusCodeInRange(statusCode, backoffOn);
    }
    
    if (this.store.backoffStatusCodes) {
      return isStatusCodeInRange(statusCode, this.store.backoffStatusCodes);
    }
    
    // Default backoff on rate limiting (429) and some server errors
    return statusCode === 429 || statusCode === 503;
  }
  
  /**
   * Calculate backoff time with exponential increase
   */
  private calculateBackoff(attempt: number): number {
    const minBackoff = config.browser.minBackoff;
    const maxBackoff = config.browser.maxBackoff;
    const backoff = Math.min(minBackoff * Math.pow(2, attempt - 1), maxBackoff);
    
    // Add jitter to prevent synchronized retries
    const jitter = Math.random() * 0.3 * backoff;
    return backoff + jitter;
  }
  
  /**
   * Check if the page content has a captcha
   */
  private hasCaptcha(pageContent: string): boolean {
    // If no captcha labels defined, assume there's no captcha
    const captchaLabels = this.store.labels.captcha;
    if (!captchaLabels) {
      return false;
    }
    
    // Helper function to convert LabelQuery to string[]
    const getLabelStrings = (label: any): string[] => {
      if (typeof label === 'string') {
        return [label];
      } else if (Array.isArray(label)) {
        if (typeof label[0] === 'string') {
          return label as string[];
        } else {
          // Element[]
          return label.flatMap(elem => 
            typeof elem === 'object' && Array.isArray(elem.text) ? elem.text : []
          );
        }
      } else if (typeof label === 'object' && Array.isArray(label.text)) {
        // Single Element
        return label.text;
      }
      return [];
    };
    
    // Convert captcha labels to string[] and check if any of them are in the page content
    const captchaStrings = getLabelStrings(captchaLabels);
    return includesLabels(pageContent, captchaStrings);
  }
  
  /**
   * Handle a captcha on the page
   */
  private async handleCaptcha(): Promise<boolean> {
    // Only attempt captcha handling if the service is configured
    if (!config.captchaHandler.service) {
      logger.debug(`ℹ [${this.store.name}] captcha detected but no handler configured`);
      
      // Wait for manual solving if configured
      if (config.captchaHandler.responseTimeout > 0) {
        logger.info(
          `ℹ [${this.store.name}] waiting ${config.captchaHandler.responseTimeout}s for manual captcha solving`
        );
        
        // Send notification about captcha
        const captchaLink: Link = {
          brand: 'captcha-deterrent',
          model: 'captcha-deterrent',
          series: 'captcha-deterrent',
          url: 'captcha'
        };
        sendNotification(captchaLink, this.store);
        
        // Wait for the timeout
        await delay(config.captchaHandler.responseTimeout * 1000);
        return true;
      }
      
      return false;
    }
    
    try {
      logger.debug(`ℹ [${this.store.name}] attempting to solve captcha`);
      
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
  
  /**
   * Check if a product is in stock
   */
  public async checkInStock(pageContent: string): Promise<boolean> {
    const {labels} = this.store;
    
    // If no labels defined, assume not in stock
    if (!labels.inStock) {
      return false;
    }
    
    // Helper function to convert LabelQuery to string[]
    const getLabelStrings = (label: any): string[] => {
      if (typeof label === 'string') {
        return [label];
      } else if (Array.isArray(label)) {
        if (typeof label[0] === 'string') {
          return label as string[];
        } else {
          // Element[]
          return label.flatMap(elem => 
            typeof elem === 'object' && Array.isArray(elem.text) ? elem.text : []
          );
        }
      } else if (typeof label === 'object' && Array.isArray(label.text)) {
        // Single Element
        return label.text;
      }
      return [];
    };
    
    // Check if page content includes in-stock indicators
    const inStockLabels = getLabelStrings(labels.inStock);
    const hasInStockLabels = includesLabels(pageContent, inStockLabels);
    
    // If out-of-stock labels are defined, make sure they're not present
    const hasOutOfStockLabels = labels.outOfStock
      ? includesLabels(pageContent, getLabelStrings(labels.outOfStock))
      : false;
    
    // Check for banned seller labels if defined
    const hasBannedSeller = labels.bannedSeller
      ? includesLabels(pageContent, getLabelStrings(labels.bannedSeller))
      : false;
    
    // Product is in stock if it has in-stock labels, doesn't have out-of-stock labels,
    // and doesn't have banned seller labels
    return hasInStockLabels && !hasOutOfStockLabels && !hasBannedSeller;
  }
  
  /**
   * Take a screenshot of the current page
   */
  private async takeScreenshot(link: Link): Promise<void> {
    try {
      const screenshotPath = this.generateScreenshotPath(link);
      await this.page.screenshot({
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
  private generateScreenshotPath(link: Link): string {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const filename = `${this.store.name}_${link.brand}_${link.model}_${timestamp}.png`;
    return `${config.page.screenshotDir}/${filename}`;
  }
}