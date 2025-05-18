/**
 * Lookup Facade
 *
 * This file demonstrates how to use the refactored components together
 * to provide the same functionality as the original lookup but with
 * a more modular and maintainable approach.
 */
import {Link, Store} from './model/store';
import {BrowserSession} from '../browser/session/browser-session';
import {RequestHandler} from '../network/handlers/request-handler';
import {logger} from '../logger';
import {config} from '../config';
import {generateLinks} from './model/link-generator';
import {sendNotification} from '../messaging/notification';
import {getSleepTime, delay} from '../util';

/**
 * Main lookup function that checks a store for product availability
 */
export async function lookup(store: Store): Promise<boolean> {
  const browserSession = await BrowserSession.create(store);
  let productFound = false;

  // Generate links if they don't already exist
  if (!store.links || store.links.length === 0) {
    store.links = await generateLinks(store);
  }

  logger.debug(
    `[${store.name}] starting product availability check for ${store.links.length} links`
  );

  // Process each link in the store
  for (const link of store.links) {
    // Skip links that don't match user-configured filters
    if (!shouldCheckLink(link)) {
      continue;
    }

    // Perform the actual check with error handling
    try {
      const found = await checkLink(browserSession, store, link);
      productFound = productFound || found;

      // Stop checking if user just wants one success
      if (productFound && !config.store.autoAddToCart) {
        break;
      }
    } catch (error) {
      logger.error(`[${store.name}] error checking link: ${error}`);
    }

    // Add delay between links to avoid rate limiting
    await delay(getSleepTime(store));
  }

  // Close the browser session when done
  await browserSession.close();

  return productFound;
}

/**
 * Checks a single link for product availability
 */
async function checkLink(
  browserSession: BrowserSession,
  store: Store,
  link: Link
): Promise<boolean> {
  return (
    (await browserSession.tryWithPage(async (page: any) => {
      const requestHandler = new RequestHandler(store, page, browserSession);

      // Make the request with standardized retry and backoff logic
      const result = await requestHandler.makeRequest(link);

      if (!result.success) {
        logger.debug(`[${store.name}] request failed for ${link.url}`);
        return false;
      }

      // Check if the product is in stock
      const inStock = await requestHandler.checkInStock(result.pageContent);

      if (!inStock) {
        logger.debug(`[${store.name}] product not in stock: ${link.url}`);
        return false;
      }

      // Product is in stock!
      logger.info(`🚀 [${store.name}] product in stock: ${link.url}`);

      // Send notification with product details
      sendNotification(link, store);

      // Handle cart addition if configured
      if (config.store.autoAddToCart) {
        // Auto add to cart logic would go here
        logger.info(`[${store.name}] auto add to cart: ${link.url}`);
      }

      return true;
    })) || false
  );
}

/**
 * Determines if a link should be checked based on user configuration
 */
function shouldCheckLink(link: Link): boolean {
  // Check series filter
  if (
    config.store.showOnlySeries.length > 0 &&
    !config.store.showOnlySeries.includes(link.series)
  ) {
    return false;
  }

  // Check brand filter
  if (
    config.store.showOnlyBrands.length > 0 &&
    !config.store.showOnlyBrands.some(brand =>
      link.brand.toLowerCase().includes(brand.toLowerCase())
    )
  ) {
    return false;
  }

  // Check model filter
  if (
    config.store.showOnlyModels.length > 0 &&
    !config.store.showOnlyModels.some(
      modelConfig =>
        (modelConfig.series === link.series || !modelConfig.series) &&
        link.model.toLowerCase().includes(modelConfig.name.toLowerCase())
    )
  ) {
    return false;
  }

  // Check price filter
  if (
    config.store.maxPrice.series[link.series] &&
    link.price &&
    link.price > config.store.maxPrice.series[link.series]
  ) {
    return false;
  }

  return true;
}
