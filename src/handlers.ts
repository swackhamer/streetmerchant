/**
 * Request and Response Handlers
 *
 * This file contains the handlers for HTTP requests and responses.
 * It provides basic functionality for request interception and statistics gathering.
 * For more advanced request handling, use the RequestHandler class from the network module.
 */
import type {HTTPRequest, HTTPResponse, Page} from 'puppeteer';
import {config} from './config';
import {logger} from './logger';
import {gatherResponseStats} from './stats';

const LOW_BANDWIDTH_MODES = [
  ['font', 'image'],
  ['font', 'image', 'media', 'other', 'stylesheet'],
];

const rejectedResourceTypes = getLowBandwidthRejectedResourceTypes();

/**
 * Handler for HTTP requests
 * Implements low bandwidth mode and continues valid requests
 */
export async function onRequest(page: Page, request: HTTPRequest) {
  if (request.isInterceptResolutionHandled() || (await isHandleLowBandwidth(request))) {
    return;
  }

  try {
    await request.continue();
  } catch (err) {
    logger.debug('Failed to continue request.', err);
  }
}

/**
 * Handler for HTTP responses
 * Gathers statistics about the response
 */
export function onResponse(page: Page, response: HTTPResponse) {
  void gatherResponseStats(page, response);
}

/**
 * Determines whether the given HTTP request should be aborted due to low bandwidth mode
 */
async function isHandleLowBandwidth(request: HTTPRequest): Promise<boolean> {
  if (
    request.isInterceptResolutionHandled() ||
    !config.browser.lowBandwidth ||
    request.url().startsWith('data:') ||
    request.url().includes('://challenges.cloudflare.com') ||
    !rejectedResourceTypes.includes(request.resourceType())
  ) {
    return false;
  }

  logger.silly(`aborting low bandwidth request [${request.resourceType()}]: ${request.url()}`);

  await tryAbortRequest(request);

  return true;
}

/**
 * Helper function to safely abort an HTTP request
 */
export async function tryAbortRequest(request: HTTPRequest): Promise<void> {
  try {
    await request.abort();
  } catch (err) {
    logger.debug(`✖ failed to abort request: ${request.url()}`, err);
  }
}

/**
 * Determines which resource types to reject in low bandwidth mode
 */
function getLowBandwidthRejectedResourceTypes(): string[] {
  if (
    config.browser.lowBandwidthMode >= 0 &&
    config.browser.lowBandwidthMode < LOW_BANDWIDTH_MODES.length
  ) {
    const rejected = LOW_BANDWIDTH_MODES[config.browser.lowBandwidthMode];
    logger.debug(
      `ℹ low bandwidth mode is enabled, the following requests will be blocked: ${rejected.join(
        ', '
      )}`
    );
    return rejected;
  } else {
    const rejected = LOW_BANDWIDTH_MODES[0];
    logger.warn(
      `✖ invalid value LOW_BANDWIDTH_MODE=${
        config.browser.lowBandwidthMode
      } expected value between 0..${LOW_BANDWIDTH_MODES.length - 1}, defaulting to: ${rejected.join(
        ', '
      )}`
    );
    return rejected;
  }
}
