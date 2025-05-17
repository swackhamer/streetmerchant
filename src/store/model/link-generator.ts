/**
 * Link Generator
 *
 * This file provides functions to generate links for stores based on
 * the series-data structure instead of individual series files.
 */
import {Store, Link} from './store';
import {getAllStoreNames, createStoreFromRegistry} from './store-registry';
import {seriesData, getAllSeries, filterSeriesDataLinks} from './series-data';
import {logger} from '../../logger';
import {config} from '../../config';

/**
 * Generates links for a store based on the series-data structure
 */
export async function generateLinks(store: Store): Promise<Link[]> {
  try {
    // Get all links for this store across all series
    const links: Link[] = [];
    
    for (const seriesName of getAllSeries()) {
      if (seriesData[seriesName] && seriesData[seriesName][store.name]) {
        for (const link of seriesData[seriesName][store.name]) {
          links.push({
            brand: link.brand,
            model: link.model,
            series: seriesName,
            url: link.url,
            cartUrl: link.cartUrl,
            price: link.price,
            itemNumber: link.itemNumber,
          });
        }
      }
    }
    
    // Apply filters based on configuration
    return filterSeriesDataLinks(links);
  } catch (error) {
    logger.error(`Error generating links for store ${store.name}:`, error);
    return [];
  }
}

/**
 * Generates links for all configured stores
 */
export async function generateAllLinks(): Promise<Record<string, Link[]>> {
  const result: Record<string, Link[]> = {};
  
  for (const storeName of getAllStoreNames()) {
    const store = createStoreFromRegistry(storeName);
    result[storeName] = await generateLinks(store);
  }
  
  return result;
}