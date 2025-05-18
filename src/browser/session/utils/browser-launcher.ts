import path from 'node:path';
import {sync as deleteSync} from 'del';
import {Browser} from 'puppeteer';
import Puppeteer from 'puppeteer';
import * as abortctl from '../../../abortctl';
import {config} from '../../../config';
import {logger} from '../../../logger';
import {BrowserLaunchConfig} from '../types';
import {buildBrowserArgs} from './browser-config';
import {configureBrowserPages} from './page-config';
import {clearBrowserCookies} from './cdp-session';

/**
 * Clean up user data directory
 */
export function cleanUserDataDir(userDataDir: string): void {
  // Delete Chrome profile to prevent proxy authentication issues
  const userDataDelGlobs = [
    userDataDir.replaceAll('\\', '/') + '/Default/*',
    '!' + userDataDir.replaceAll('\\', '/') + '/Default/Cache',
  ];
  deleteSync(userDataDelGlobs, {force: true});
}

/**
 * Launch a new browser instance
 */
export async function launchBrowser({
  options,
  proxy,
  userAgent,
}: BrowserLaunchConfig): Promise<Browser> {
  abortctl.assert('browser');

  const args = buildBrowserArgs(options, proxy, userAgent);

  if (args.length > 0) {
    logger.debug('ℹ puppeteer config: ', args.toSorted());
  }

  // In Docker, always disable browser open
  if (config.docker) {
    config.browser.open = false;
  }

  const browser = await Puppeteer.launch({
    args,
    defaultViewport: null,
    handleSIGHUP: false,
    handleSIGINT: false,
    handleSIGTERM: false,
    headless: false, // explicitly specified in args
    protocolTimeout: config.page.protocolTimeout,
    ...options,
  });

  // Set up page configuration
  await configureBrowserPages(browser, proxy);

  // Clear cookies on browser start
  await clearBrowserCookies(browser);

  return browser;
}

/**
 * Get the default browser user agent
 */
export async function getDefaultUserAgent(): Promise<string | undefined> {
  if (!config.browser.userAgentKeepDefault) {
    return undefined;
  }

  let browser: Browser | undefined;
  let userAgent: string | undefined;

  try {
    browser = await launchBrowser({
      options: {
        headless: true,
        userDataDir: path.join(config.browser.profileParentDir, 'default'),
      },
    });

    userAgent = await browser.userAgent();

    // Remove headless from the default user agent
    if (userAgent.includes('Headless')) {
      userAgent = userAgent.replaceAll(/headless/gi, '');
    }
  } catch {
    // noop
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch {
        // noop
      }
    }
  }

  return userAgent;
}
