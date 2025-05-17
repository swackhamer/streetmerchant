/**
 * Helper functions for formatting log messages
 */
import chalk from 'chalk';
import {Link, Store} from '../store/model';

/**
 * Build a setup string for logging
 */
export function buildSetupString(
  topic: string,
  store: Store,
  color?: boolean
): string {
  let proxy = '';
  if (
    typeof store.currentProxyIndex === 'number' &&
    store.proxyList &&
    store.proxyList.length > 1
  ) {
    proxy = `[${store.currentProxyIndex + 1}/${store.proxyList.length}] `;
  }

  if (color) {
    return (
      chalk.grey(proxy) +
      chalk.cyan(`[${store.name}]`) +
      chalk.grey(` [setup (${topic})]`)
    );
  }

  return `${proxy}[${store.name}] [setup (${topic})]`;
}

/**
 * Build a product string for logging
 */
export function buildProductString(link: Link, store: Store, color?: boolean): string {
  if (color) {
    if (store.currentProxyIndex !== undefined && store.proxyList) {
      const proxy = `${store.currentProxyIndex + 1}/${store.proxyList.length}`;
      return (
        chalk.grey(`[${proxy}]`) +
        chalk.cyan(` [${store.name}]`) +
        chalk.grey(` [${link.brand} (${link.series})] ${link.model}`)
      );
    } else {
      return (
        chalk.cyan(`[${store.name}]`) +
        chalk.grey(` [${link.brand} (${link.series})] ${link.model}`)
      );
    }
  }

  if (store.currentProxyIndex !== undefined && store.proxyList) {
    const proxy = `${store.currentProxyIndex + 1}/${store.proxyList.length}`;
    return `[${proxy}] [${store.name}] [${link.brand} (${link.series})] ${link.model}`;
  } else {
    return `[${store.name}] [${link.brand} (${link.series})] ${link.model}`;
  }
}