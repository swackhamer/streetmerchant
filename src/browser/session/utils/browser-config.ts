import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {Browser, LaunchOptions, Page} from 'puppeteer';
import Puppeteer from 'puppeteer';
import {config} from '../../../config';
import {logger} from '../../../logger';
import {Proxy as ProxyConfig} from '../../../proxy';
import {getRandomUserAgent} from '../../../util';
import {CookiePolicy} from '..';

/**
 * Determine cookie policy based on configuration
 */
export function getCookiePolicy(): CookiePolicy {
  let cookiePolicy: CookiePolicy;
  if (
    (Object.values(CookiePolicy) as string[]).includes(config.browser.cookiePolicy.toLowerCase())
  ) {
    cookiePolicy = config.browser.cookiePolicy as CookiePolicy;
  } else if (config.browser.cookiePolicy === '') {
    cookiePolicy = CookiePolicy.DEFAULT;
  } else {
    logger.warn(
      `✖ invalid value COOKIE_POLICY=${config.browser.cookiePolicy} defaulting to: ${CookiePolicy.DEFAULT}`
    );
    cookiePolicy = CookiePolicy.DEFAULT;
  }
  logger.debug(`ℹ using cookie policy: ${cookiePolicy}`);
  return cookiePolicy;
}

/**
 * Builds browser launch arguments
 */
export function buildBrowserArgs(
  options?: LaunchOptions,
  proxy?: ProxyConfig,
  userAgent?: string
): string[] {
  const args: string[] = [
    '--disable-blink-features=AutomationControlled',
    `--window-size=${config.page.width},${config.page.height}`,
  ];

  if (userAgent) {
    args.push(`--user-agent=${userAgent}`);
  }

  // Skip Chromium Linux Sandbox if trusted or in Docker
  if (config.browser.isTrusted || config.docker) {
    args.push('--no-sandbox');
  }

  // Enable headless (force if docker)
  if (config.browser.isHeadless || config.docker || options?.headless) {
    args.push(
      '--headless=new',
      '--ozone-platform-hint=auto',
      `--ozone-override-screen-size=${config.page.width},${config.page.height}`
    );

    // Handle GPU acceleration
    const gpuAcceleration = configureGpuAcceleration(args);

    if (!gpuAcceleration) {
      args.push('--disable-gpu');
    }
  }

  // Add proxy configuration
  if (proxy) {
    args.push(`--proxy-server=${proxy.server}`);
  }

  return args;
}

/**
 * Configure GPU acceleration based on platform
 */
function configureGpuAcceleration(args: string[]): boolean {
  switch (os.platform()) {
    case 'darwin':
      args.push('--angle=metal');
      return true;

    case 'linux':
      if (fs.existsSync('/dev/dri/renderD128')) {
        args.push(
          '--disable-vulkan-surface',
          '--enable-features=Vulkan',
          '--enable-unsafe-webgpu',
          '--use-angle=vulkan',
          '--enable-features=AcceleratedVideoEncoder'
        );
        return true;
      }
      break;
  }

  return false;
}

/**
 * Get user agent for browser
 */
export async function getUserAgent(page: Page): Promise<string> {
  if (!config.browser.userAgentKeepDefault) {
    return getRandomUserAgent();
  } else {
    return await page.browser().userAgent();
  }
}
