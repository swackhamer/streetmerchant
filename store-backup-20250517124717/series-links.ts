import {Link, Series} from './store';
import {config} from '../../config';
import {logger} from '../../logger';
import * as fs from 'fs';
import * as path from 'path';
import {validateLinks} from './link-validator';

// Cache for loaded link modules
const linkCache: Record<string, Link[]> = {};

/**
 * Options for filtering links
 */
export interface LinkFilterOptions {
  // Filter by specific brands (e.g., 'nvidia', 'asus')
  brands?: string[];
  // Filter by specific models (e.g., 'founders edition', 'strix')
  models?: string[];
  // Filter by maximum price (per series)
  maxPrice?: Record<Series, number>;
}

/**
 * Gets all available series names from the series directory
 * 
 * @returns Array of all series names
 */
function getAllSeriesNames(): string[] {
  const seriesDir = path.join(__dirname, 'series');
  
  if (!fs.existsSync(seriesDir)) {
    return [];
  }
  
  return fs.readdirSync(seriesDir)
    .filter(file => fs.statSync(path.join(seriesDir, file)).isDirectory());
}

/**
 * Gets links for a specific store and series
 * 
 * @param storeName The name of the store
 * @param series The series to get links for
 * @returns Links for the specified store and series
 */
async function getStoreSeriesLinks(storeName: string, series: Series): Promise<Link[]> {
  const cacheKey = `${storeName}_${series}`;
  
  // Return cached links if available
  if (linkCache[cacheKey]) {
    return linkCache[cacheKey];
  }
  
  // Try to import the series-specific links file
  const seriesDir = path.join(__dirname, 'series', series);
  const filePath = path.join(seriesDir, `${storeName}.ts`);
  
  if (fs.existsSync(filePath)) {
    try {
      // Use dynamic import to load the module
      // Note: The import path is relative to this file
      const module = await import(`./series/${series}/${storeName}`);
      
      // Validate links before caching
      const rawLinks = module.links || [];
      const validLinks = validateLinks(rawLinks, `${storeName}_${series}`);
      
      linkCache[cacheKey] = validLinks;
      
      if (validLinks.length < rawLinks.length) {
        logger.warn(
          `Filtered out ${rawLinks.length - validLinks.length} invalid links for store ${storeName}, series ${series}`
        );
      }
      
      return validLinks;
    } catch (error) {
      logger.error(`Error loading links for store ${storeName}, series ${series}`);
      linkCache[cacheKey] = [];
      return [];
    }
  } else {
    // No links file found for this store/series combination
    linkCache[cacheKey] = [];
    return [];
  }
}

/**
 * Filters links based on provided options
 * 
 * @param links The links to filter
 * @param options Filter options
 * @returns Filtered links
 */
function filterLinks(links: Link[], options?: LinkFilterOptions): Link[] {
  if (!options) {
    return links;
  }
  
  let filteredLinks = links;
  
  // Filter by brand if specified
  if (options.brands && options.brands.length > 0) {
    filteredLinks = filteredLinks.filter(link => 
      options.brands!.some(brand => 
        link.brand.toLowerCase().includes(brand.toLowerCase())
      )
    );
  }
  
  // Filter by model if specified
  if (options.models && options.models.length > 0) {
    filteredLinks = filteredLinks.filter(link => 
      options.models!.some(model => 
        link.model.toLowerCase().includes(model.toLowerCase())
      )
    );
  }
  
  // Filter by maximum price if specified
  if (options.maxPrice) {
    filteredLinks = filteredLinks.filter(link => {
      const maxPriceForSeries = options.maxPrice![link.series as Series];
      if (maxPriceForSeries && link.price) {
        return link.price <= maxPriceForSeries;
      }
      return true; // Keep links without price info or without max price for their series
    });
  }
  
  return filteredLinks;
}

/**
 * Gets links for a specific store, filtered by active series and other options
 * 
 * @param storeName The name of the store
 * @param filterOptions Additional filtering options (brand, model, etc.)
 * @returns Links for the store's active series, filtered by options
 */
export async function getSeriesLinks(
  storeName: string, 
  filterOptions?: LinkFilterOptions
): Promise<Link[]> {
  // Determine which series to load links for
  const activeSeriesList = config.store.showOnlySeries.length > 0 
    ? config.store.showOnlySeries 
    : getAllSeriesNames();
  
  let allLinks: Link[] = [];
  
  // Load links for each active series
  for (const series of activeSeriesList) {
    try {
      const seriesLinks = await getStoreSeriesLinks(storeName, series as Series);
      allLinks = allLinks.concat(seriesLinks);
    } catch (error) {
      logger.debug(`No links found for store ${storeName}, series ${series}`);
    }
  }
  
  // Apply additional filtering
  return filterLinks(allLinks, filterOptions);
}

/**
 * Clears the link cache
 */
export function clearLinkCache(): void {
  Object.keys(linkCache).forEach(key => {
    delete linkCache[key];
  });
}