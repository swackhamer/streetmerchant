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
import {getSleepTime, delay} from '../../util';
import {config} from '../../config';
import {BrowserSession} from '../../browser/session/browser-session';
import {
  RequestOptions, 
  ResponseResult
} from './types';

// Re-export types
export {RequestOptions, ResponseResult} from './types';
import {
  checkAndHandleCaptcha,
  checkInStock,
  isSuccessStatusCode,
  shouldRetry,
  shouldBackoff,
  calculateBackoff,
  takeScreenshot
} from './utils';

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
        // Try to load the page
        const requestResult = await this.loadPage(link);
        response = requestResult.response;
        lastStatusCode = requestResult.statusCode;
        pageContent = requestResult.pageContent;
        
        // Process cookies based on status code
        await this.browserSession.processCookies(lastStatusCode);
        
        // Check for success
        const isSuccess = isSuccessStatusCode(lastStatusCode, this.store);
        
        // Handle retry or backoff logic
        if (!isSuccess) {
          if (shouldRetry(lastStatusCode, options.retryOn)) {
            if (!await this.handleRetry(attempt, retries)) {
              break;
            }
            attempt++;
            continue;
          } else if (shouldBackoff(lastStatusCode, this.store, options.backoffOn)) {
            if (!await this.handleBackoff(attempt, retries)) {
              break;
            }
            attempt++;
            continue;
          }
        }
        
        // Check for captcha
        const captchaHandled = await checkAndHandleCaptcha(pageContent, this.page, this.store);
        
        // Refresh page if captcha was handled
        if (captchaHandled) {
          const refreshedResult = await this.refreshPage();
          response = refreshedResult.response;
          lastStatusCode = refreshedResult.statusCode;
          pageContent = refreshedResult.pageContent;
        }
        
        // Take screenshot if configured
        if (config.page.screenshot) {
          await takeScreenshot(this.page, this.store, link);
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
   * Load a page and get its content
   */
  private async loadPage(link: Link): Promise<{
    response: HTTPResponse | null;
    statusCode: number;
    pageContent: string;
  }> {
    // Navigate to the URL
    logger.debug(`ℹ [${this.store.name}] navigating to ${link.url}`);
    const response = await this.page.goto(link.url, {
      waitUntil: 'domcontentloaded',
    });
    
    // Get status code
    const statusCode = response?.status() ?? 0;
    
    // Get page content
    let pageContent = '';
    try {
      pageContent = await this.page.content();
    } catch (error) {
      logger.error(`✖ [${this.store.name}] unable to get page content: ${error}`);
    }
    
    return {
      response,
      statusCode,
      pageContent
    };
  }
  
  /**
   * Refresh the current page
   */
  private async refreshPage(): Promise<{
    response: HTTPResponse | null;
    statusCode: number;
    pageContent: string;
  }> {
    const response = await this.page.reload({waitUntil: 'domcontentloaded'});
    const statusCode = response?.status() ?? 0;
    const pageContent = await this.page.content();
    
    return {
      response,
      statusCode,
      pageContent
    };
  }
  
  /**
   * Handle retry logic
   * @returns true if the retry should continue, false to break the retry loop
   */
  private async handleRetry(attempt: number, maxRetries: number): Promise<boolean> {
    logger.debug(`ℹ [${this.store.name}] retrying (${attempt}/${maxRetries})`);
    
    if (attempt < maxRetries) {
      // Simple delay between retries
      await delay(getSleepTime(this.store));
      return true;
    }
    
    return false;
  }
  
  /**
   * Handle backoff logic
   * @returns true if the retry should continue, false to break the retry loop
   */
  private async handleBackoff(attempt: number, maxRetries: number): Promise<boolean> {
    logger.debug(`ℹ [${this.store.name}] backing off (${attempt}/${maxRetries})`);
    
    if (attempt < maxRetries) {
      // Exponential backoff
      const backoffTime = calculateBackoff(attempt);
      logger.debug(`ℹ [${this.store.name}] backing off for ${backoffTime}ms`);
      await delay(backoffTime);
      return true;
    }
    
    return false;
  }
  
  /**
   * Check if a product is in stock
   */
  public async checkInStock(pageContent: string): Promise<boolean> {
    return checkInStock(pageContent, this.store.labels);
  }
}