/**
 * Message formatters for different log types
 */
import chalk from 'chalk';
import {Link, Store} from '../store/model';
import {buildProductString, buildSetupString} from './format-helpers';

/**
 * Collection of message formatter functions
 */
export const Print = {
  /**
   * Format a backoff delay message
   */
  backoff(
    link: Link,
    store: Store,
    parameters: {delay: number; statusCode: number},
    color?: boolean
  ): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow(
          `BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`
        )
      );
    }

    return `✖ ${buildProductString(link, store)} :: BACKOFF DELAY status=${
      parameters.statusCode
    } delay=${parameters.delay}`;
  },
  
  /**
   * Format a bad status code message
   */
  badStatusCode(
    link: Link,
    store: Store,
    statusCode: number,
    color?: boolean
  ): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow(`STATUS CODE ERROR ${statusCode}`)
      );
    }

    return `✖ ${buildProductString(
      link,
      store
    )} :: STATUS CODE ERROR ${statusCode}`;
  },
  
  /**
   * Format a banned seller message
   */
  bannedSeller(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('BANNED SELLER')
      );
    }

    return `✖ ${buildProductString(link, store)} :: BANNED SELLER`;
  },
  
  /**
   * Format a captcha message
   */
  captcha(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('CAPTCHA')
      );
    }

    return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
  },
  
  /**
   * Format a cloudflare message
   */
  cloudflare(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('CLOUDFLARE, WAITING')
      );
    }

    return `✖ ${buildProductString(link, store)} :: CLOUDFLARE, WAITING`;
  },
  
  /**
   * Format an in-stock message
   */
  inStock(link: Link, store: Store, color?: boolean, sms?: boolean): string {
    const productString = `${buildProductString(link, store)} :: IN STOCK`;

    if (color) {
      return chalk.bgGreen.white.bold(`🚀🚨 ${productString} 🚨🚀`);
    }

    if (sms) {
      return productString;
    }

    return `🚀🚨 ${productString} 🚨🚀`;
  },
  
  /**
   * Format an in-stock waiting message
   */
  inStockWaiting(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        'ℹ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('IN STOCK, WAITING')
      );
    }

    return `ℹ ${buildProductString(link, store)} :: IN STOCK, WAITING`;
  },
  
  /**
   * Format a max price message
   */
  maxPrice(
    link: Link,
    store: Store,
    maxPrice: number,
    color?: boolean
  ): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow(
          `IN STOCK, PRICE ${link.price ?? ''} EXCEEDS LIMIT ${maxPrice}`
        )
      );
    }

    return `✖ ${buildProductString(link, store)} :: PRICE ${
      link.price ?? ''
    } EXCEEDS LIMIT ${maxPrice}`;
  },
  
  /**
   * Format a generic message
   */
  message(
    message: string,
    topic: string,
    store: Store,
    color?: boolean,
    info?: boolean
  ): string {
    const symbol = info ? 'ℹ' : '✖';
    if (color) {
      return (
        `${symbol} ` +
        buildSetupString(topic, store, true) +
        ' :: ' +
        chalk.yellow(message)
      );
    }

    return `${symbol} ${buildSetupString(topic, store)} :: ${message}`;
  },
  
  /**
   * Format a no response message
   */
  noResponse(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('NO RESPONSE')
      );
    }

    return `✖ ${buildProductString(link, store)} :: NO RESPONSE`;
  },
  
  /**
   * Format an out-of-stock message
   */
  outOfStock(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.red('OUT OF STOCK')
      );
    }

    return `✖ ${buildProductString(link, store)} :: OUT OF STOCK`;
  },
  
  /**
   * Format a product in-stock message
   */
  productInStock(link: Link): string {
    let productString = `Product Page: ${link.url}`;
    if (link.cartUrl) productString += `\nAdd To Cart Link: ${link.cartUrl}`;

    return productString;
  },
  
  /**
   * Format a rate limit message
   */
  rateLimit(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('RATE LIMIT EXCEEDED')
      );
    }

    return `✖ ${buildProductString(link, store)} :: RATE LIMIT EXCEEDED`;
  },
  
  /**
   * Format a recursion limit message
   */
  recursionLimit(link: Link, store: Store, color?: boolean): string {
    if (color) {
      return (
        '✖ ' +
        buildProductString(link, store, true) +
        ' :: ' +
        chalk.yellow('CLOUDFLARE RETRY LIMIT REACHED, ABORT')
      );
    }

    return `✖ ${buildProductString(
      link,
      store
    )} :: CLOUDFLARE RETRY LIMIT REACHED, ABORT`;
  },
};