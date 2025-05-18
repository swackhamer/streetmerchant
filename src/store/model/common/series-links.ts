/**
 * Series links loading for store configurations
 * Loads links from the series-based organization structure
 */
import {Link, Series} from '../store';
import {logger} from '../../../logger';
import {seriesData, getAllSeries} from '../series-data';

/**
 * Options for filtering links
 */
export interface LinkFilterOptions {
  series?: string[];
  brands?: string[];
  models?: string[];
  maxPrice?: Record<string, number>;
  useCentralizedData?: boolean;
}

// Cache for links to avoid reloading repeatedly
const linksCache = new Map<string, Link[]>();

/**
 * Gets links for a specific store, optionally filtered by provided options
 */
export async function getSeriesLinks(
  storeName: string,
  options?: LinkFilterOptions
): Promise<Link[]> {
  // Check cache first
  const cacheKey = `${storeName}:${JSON.stringify(options || {})}`;
  if (linksCache.has(cacheKey)) {
    return linksCache.get(cacheKey) || [];
  }

  try {
    // Get all links for the store across all series
    let allLinks: Link[] = [];

    // Determine which series to include
    const seriesToInclude = options?.series || getAllSeries();

    // For each series, get links for this store
    for (const series of seriesToInclude) {
      const seriesKey = series as keyof typeof seriesData;
      if (seriesData[seriesKey] && seriesData[seriesKey][storeName]) {
        // Get links and set the series
        const seriesLinks = seriesData[seriesKey][storeName];
        const links = seriesLinks.map(link => ({
          ...link,
          series: series as Series,
        }));
        allLinks = [...allLinks, ...links];
      }
    }

    // Apply filters if provided
    const filteredLinks = filterLinks(allLinks, options);

    // Cache the results
    linksCache.set(cacheKey, filteredLinks);

    logger.debug(`Loaded ${filteredLinks.length} links for store ${storeName}`);
    return filteredLinks;
  } catch (error) {
    logger.error(`Error loading links for store ${storeName}:`, error);
    return [];
  }
}

/**
 * Filters links based on the provided options
 */
export function filterLinks(links: Link[], options?: LinkFilterOptions): Link[] {
  if (!options) {
    return links;
  }

  let filteredLinks = links;

  // Filter by series if specified
  if (options.series && options.series.length > 0) {
    filteredLinks = filteredLinks.filter(link => options.series!.includes(link.series));
  }

  // Filter by brand if specified
  if (options.brands && options.brands.length > 0) {
    filteredLinks = filteredLinks.filter(link =>
      options.brands!.some(brand => link.brand.toLowerCase().includes(brand.toLowerCase()))
    );
  }

  // Filter by model if specified
  if (options.models && options.models.length > 0) {
    filteredLinks = filteredLinks.filter(link =>
      options.models!.some(model => link.model.toLowerCase().includes(model.toLowerCase()))
    );
  }

  // Filter by maximum price if specified
  if (options.maxPrice) {
    filteredLinks = filteredLinks.filter(link => {
      const maxPriceForSeries = options.maxPrice![link.series];
      if (maxPriceForSeries && link.price) {
        return link.price <= maxPriceForSeries;
      }
      return true; // Keep links without price info or without max price for their series
    });
  }

  return filteredLinks;
}

/**
 * Checks if a store has series-based links available
 */
export function hasSeriesLinks(storeName: string): boolean {
  return Object.keys(seriesData).some(seriesKey => {
    const seriesStore = seriesData[seriesKey as keyof typeof seriesData];
    return seriesStore && seriesStore[storeName] && seriesStore[storeName].length > 0;
  });
}
