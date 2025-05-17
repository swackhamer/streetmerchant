/**
 * Link Generator
 *
 * This file provides functions to generate links for stores based on
 * the series-data structure instead of individual series files.
 */
import {Store, Link} from '../store';
import {getAllStoreNames, createStoreFromRegistry} from './store-registry';
import {seriesData, getAllSeriesNames, getAllStoreLinks} from './series-data';
import {logger} from '../../../logger';
import {config} from '../../../config';

/**
 * Generates links for a store based on the series-data structure
 */
export async function generateLinks(store: Store): Promise<Link[]> {
  try {
    // Get all links for this store across all series
    const storeLinks = getAllStoreLinks(store.name);
    
    // Convert to Link objects with series field
    const links: Link[] = [];
    
    for (const seriesName of getAllSeriesNames()) {
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
    return filterLinks(links);
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

/**
 * Filters links based on configuration
 */
function filterLinks(links: Link[]): Link[] {
  // Filter by series
  if (config.store.showOnlySeries.length > 0) {
    links = links.filter(link => 
      config.store.showOnlySeries.includes(link.series)
    );
  }
  
  // Filter by brand
  if (config.store.showOnlyBrands.length > 0) {
    links = links.filter(link =>
      config.store.showOnlyBrands.some(brand => 
        link.brand.toLowerCase().includes(brand.toLowerCase())
      )
    );
  }
  
  // Filter by model
  if (config.store.showOnlyModels.length > 0) {
    links = links.filter(link =>
      config.store.showOnlyModels.some(modelConfig => 
        (modelConfig.series === link.series || !modelConfig.series) &&
        link.model.toLowerCase().includes(modelConfig.name.toLowerCase())
      )
    );
  }
  
  // Filter by price
  links = links.filter(link => {
    const maxPriceForSeries = config.store.maxPrice.series[link.series];
    if (maxPriceForSeries && link.price) {
      return link.price <= maxPriceForSeries;
    }
    return true;
  });
  
  return links;
}