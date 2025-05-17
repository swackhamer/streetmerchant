/**
 * Stock checking functionality
 */
import {Page} from 'puppeteer';
import {config} from '../../config';
import {logger} from '../../logger';
import {Link, Store} from '../model';
import {Selector, pageIncludesLabels, getPrice as getPriceFromPage} from '../includes-labels';
import {Print} from '../../logger';

/**
 * Check if an item is in stock
 */
export async function isItemInStock(
  store: Store,
  page: Page,
  link: Link
): Promise<boolean> {
  // Check using the realtime inventory lookup if available
  if (store.realTimeInventoryLookup && link.itemNumber) {
    try {
      return await store.realTimeInventoryLookup(link.itemNumber);
    } catch (error) {
      logger.error(`✖ [${store.name}] realtime inventory lookup failed: ${error}`);
    }
  }

  // Get the page content to check against the labels
  const pageContent = await page.content();
  
  // Parse price if label exists
  if (link.labels?.maxPrice) {
    try {
      const price = await getPrice(
        store,
        page,
        link.labels.maxPrice
      );
      link.price = price;
    } catch (error) {
      logger.error(`✖ [${store.name}] unable to get price: ${error}`);
    }
  }

  const labels = link.labels ?? store.labels;
  
  // Return false if there are no in-stock labels
  if (!labels.inStock) {
    return false;
  }

  // Default selector options
  const defaultSelector = {
    requireVisible: true,
    selector: 'body',
    type: 'textContent' as const
  };
  
  // Check the page content for in-stock indicators
  const inStockResult = await pageIncludesLabels(page, labels.inStock, defaultSelector);
  
  // Check if there are any out-of-stock indicators
  let outOfStockResult = false;
  if (labels.outOfStock) {
    outOfStockResult = await pageIncludesLabels(page, labels.outOfStock, defaultSelector);
  }

  // Check for banned seller indicators for marketplace sites
  let bannedSellerResult = false;
  if (labels.bannedSeller) {
    bannedSellerResult = await pageIncludesLabels(page, labels.bannedSeller, defaultSelector);
  }

  // Item is in stock only if all conditions are met:
  // 1. In-stock indicators are present
  // 2. Out-of-stock indicators are not present (if defined)
  // 3. Banned seller indicators are not present (if defined)
  const hasStock = inStockResult && !outOfStockResult && !bannedSellerResult;
  
  if (!hasStock) {
    logger.info(Print.outOfStock(link, store, true));
  }
  
  return hasStock;
}

/**
 * Get the product price from the page
 */
export async function getPrice(
  store: Store,
  page: Page,
  pricing: {container: string; euroFormat?: boolean}
): Promise<number | null> {
  try {
    // Create selector from pricing
    const priceSelector = {
      requireVisible: true,
      selector: pricing.container,
      type: 'textContent' as const
    };
    
    return await getPriceFromPage(page, pricing, priceSelector);
  } catch (error) {
    logger.debug(`✖ [${store.name}] unable to get price: ${error}`);
    return null;
  }
}