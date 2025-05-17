/**
 * Network Module
 * 
 * This module provides a unified interface for network operations.
 * It serves as a compatibility layer between the old procedural approach
 * and the new object-oriented approach.
 */

import {Browser, Page, HTTPResponse} from 'puppeteer';
import {Store, Link} from '../store/model';
import {BrowserSession} from '../browser/session/browser-session';
import {RequestHandler, RequestOptions, ResponseResult} from './handlers/request-handler';
import {logger} from '../logger';

// Map to track request handlers for compatibility
const handlerMap = new Map<Store, RequestHandler>();

/**
 * Make a request to a URL with standardized error handling and retry logic
 */
export async function makeRequest(
  browser: Browser,
  page: Page,
  store: Store,
  link: Link,
  options: RequestOptions = {}
): Promise<ResponseResult> {
  // Get or create a BrowserSession
  let session: BrowserSession;
  try {
    // Create a proper session for this store
    session = new BrowserSession(store, { browser });
  } catch (error) {
    logger.error(`✖ [${store.name}] error creating browser session: ${error}`);
    throw error;
  }
  
  // Get or create a RequestHandler
  let handler = handlerMap.get(store);
  if (!handler) {
    handler = new RequestHandler(store, page, session);
    handlerMap.set(store, handler);
  }
  
  // Make the request
  return await handler.makeRequest(link, options);
}

/**
 * Check if a product is in stock
 */
export async function checkInStock(
  store: Store,
  pageContent: string
): Promise<boolean> {
  // Create a temporary request handler just to use the checkInStock method
  const tempHandler = new RequestHandler(
    store, 
    // These parameters aren't used in checkInStock
    null as unknown as Page, 
    null as unknown as BrowserSession
  );
  
  return await tempHandler.checkInStock(pageContent);
}

/**
 * Export RequestHandler class for direct use
 */
export {RequestHandler, RequestOptions, ResponseResult};