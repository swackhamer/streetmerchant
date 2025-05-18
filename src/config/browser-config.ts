/**
 * Browser Configuration
 *
 * This module exports browser-related configuration settings.
 */
import {envOrBoolean, envOrNumber, envOrNumberMax, envOrNumberMin, envOrString} from './env-utils';

/**
 * Configuration for the browser used to scrape websites
 */
export const browser = {
  cookiePolicy: envOrString(process.env.COOKIE_POLICY),
  isHeadless: envOrBoolean(process.env.HEADLESS),
  isTrusted: envOrBoolean(process.env.BROWSER_TRUSTED, false),
  lowBandwidth: envOrBoolean(process.env.LOW_BANDWIDTH, false),
  lowBandwidthMode: envOrNumber(process.env.LOW_BANDWIDTH_MODE),
  maxBackoff: envOrNumberMax(process.env.PAGE_BACKOFF_MIN, process.env.PAGE_BACKOFF_MAX, 3600000),
  maxSleep: envOrNumberMax(process.env.PAGE_SLEEP_MIN, process.env.PAGE_SLEEP_MAX, 10000),
  minBackoff: envOrNumberMin(process.env.PAGE_BACKOFF_MIN, process.env.PAGE_BACKOFF_MAX, 10000),
  minSleep: envOrNumberMin(process.env.PAGE_SLEEP_MIN, process.env.PAGE_SLEEP_MAX, 5000),
  open: envOrBoolean(process.env.OPEN_BROWSER, !envOrBoolean(process.env.DOCKER, false)),
  profileParentDir: '',
  userAgentKeepDefault: envOrBoolean(process.env.USER_AGENT_KEEP_DEFAULT, false),
};

/**
 * Configuration for the page and viewport settings
 */
export const page = {
  height: 900,
  inStockWaitTime: envOrNumber(process.env.IN_STOCK_WAIT_TIME),
  screenshot: envOrBoolean(process.env.SCREENSHOT),
  screenshotDir: envOrString(process.env.SCREENSHOT_DIR, 'screenshots'),
  screenshotFullPage: envOrBoolean(process.env.SCREENSHOT_FULL_PAGE, false),
  timeout: envOrNumber(process.env.PAGE_TIMEOUT, 30000),
  protocolTimeout: envOrNumber(process.env.PROTOCOL_TIMEOUT, 60000),
  width: 1366,
};

/**
 * Configuration for CAPTCHA handling
 */
export const captchaHandler = {
  captureType: envOrString(process.env.CAPTCHA_HANDLER_CAPTURE_TYPE),
  pollInterval: envOrNumber(process.env.CAPTCHA_HANDLER_POLL_INTERVAL, 5),
  responseTimeout: envOrNumber(process.env.CAPTCHA_HANDLER_RESPONSE_TIMEOUT, 300),
  service: envOrString(process.env.CAPTCHA_HANDLER_SERVICE),
  token: envOrString(process.env.CAPTCHA_HANDLER_TOKEN),
  userId: envOrString(process.env.CAPTCHA_HANDLER_USER_ID),
};
