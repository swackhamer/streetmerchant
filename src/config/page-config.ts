import {envOrBoolean, envOrNumber, envOrString} from './env-utils';

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
