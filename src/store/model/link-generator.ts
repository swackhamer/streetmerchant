/**
 * Link Generator
 *
 * This file provides functions to generate links for stores based on
 * the series-data structure instead of individual series files.
 * It reduces duplication by centralizing link generation logic.
 */
import {Store, Link, Brand, Model, Series} from './store';
import {getAllStoreNames, createStoreFromRegistry} from './store-registry';
import {seriesData, getAllSeries, filterSeriesDataLinks, getAllLinksForSeries} from './series-data';
import {logger} from '../../logger';
import {config} from '../../config';

/**
 * Definition for a template-based link with placeholders
 */
export interface LinkTemplate {
  url: string;
  placeholders?: {
    brand?: boolean;
    model?: boolean;
    series?: boolean;
    itemId?: boolean;
  };
  itemIds?: Record<string, string>;
}

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
          // Ensure the link is properly typed
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
    const filteredLinks = filterSeriesDataLinks(links);
    
    // Generate any template-based links if store has link templates defined
    if (store.linkTemplates) {
      const templateLinks = generateLinksFromTemplates(store);
      filteredLinks.push(...templateLinks);
    }
    
    return filteredLinks;
  } catch (error) {
    logger.error(`Error generating links for store ${store.name}:`, error);
    return [];
  }
}

/**
 * Generate links from templates defined in the store
 */
function generateLinksFromTemplates(store: Store): Link[] {
  if (!store.linkTemplates || !Array.isArray(store.linkTemplates)) {
    return [];
  }
  
  const links: Link[] = [];
  
  for (const template of store.linkTemplates) {
    // Get the relevant series data
    for (const seriesName of getAllSeries()) {
      // Get all product combinations for this series
      const seriesProducts = getAllProductCombinations(seriesName as Series);
      
      for (const product of seriesProducts) {
        const {brand, model} = product;
        
        // Generate URL using template
        let url = template.url;
        
        // Replace placeholders in URL
        if (template.placeholders) {
          if (template.placeholders.brand) {
            url = url.replace('{brand}', formatForUrl(brand));
          }
          
          if (template.placeholders.model) {
            url = url.replace('{model}', formatForUrl(model));
          }
          
          if (template.placeholders.series) {
            url = url.replace('{series}', formatForUrl(seriesName));
          }
          
          // Replace item ID placeholder if applicable
          if (template.placeholders.itemId && template.itemIds) {
            const itemId = getItemId(brand, model, seriesName, template.itemIds);
            if (itemId) {
              url = url.replace('{itemId}', itemId);
            } else {
              // Skip this combination if no item ID found
              continue;
            }
          }
        }
        
        // Add the generated link
        links.push({
          brand,
          model,
          series: seriesName as Series,
          url,
        });
      }
    }
  }
  
  return links;
}

/**
 * Format a string to be used in a URL
 * Replaces spaces with hyphens and converts to lowercase
 */
function formatForUrl(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Get item ID for a specific product combination
 */
function getItemId(
  brand: Brand,
  model: Model | string,
  series: string,
  itemIds: Record<string, string>
): string | undefined {
  // Try combined keys first
  const combinedKey = `${brand}:${model}:${series}`;
  if (itemIds[combinedKey]) {
    return itemIds[combinedKey];
  }
  
  // Try brand+model
  const brandModelKey = `${brand}:${model}`;
  if (itemIds[brandModelKey]) {
    return itemIds[brandModelKey];
  }
  
  // Try brand+series
  const brandSeriesKey = `${brand}:${series}`;
  if (itemIds[brandSeriesKey]) {
    return itemIds[brandSeriesKey];
  }
  
  // Try just the brand
  if (itemIds[brand]) {
    return itemIds[brand];
  }
  
  return undefined;
}

/**
 * Get all product combinations (brand, model) for a series
 */
function getAllProductCombinations(series: Series): Array<{brand: Brand; model: Model | string}> {
  const seriesLinks = getAllLinksForSeries(series);
  const combinations: Array<{brand: Brand; model: Model | string}> = [];
  
  // Map to avoid duplicates
  const combinationMap = new Map<string, {brand: Brand; model: Model | string}>();
  
  for (const storeName in seriesLinks) {
    for (const link of seriesLinks[storeName]) {
      const key = `${link.brand}:${link.model}`;
      if (!combinationMap.has(key)) {
        combinationMap.set(key, {
          brand: link.brand,
          model: link.model,
        });
      }
    }
  }
  
  return Array.from(combinationMap.values());
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
 * Updates the store with links from the series data
 */
export async function updateStoreWithLinks(store: Store): Promise<void> {
  if (!store.links || store.links.length === 0) {
    store.links = await generateLinks(store);
    logger.debug(`Generated ${store.links.length} links for ${store.name}`);
  }
}