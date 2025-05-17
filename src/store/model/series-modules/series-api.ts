/**
 * Series API - Main entry point for series link functions
 */
import {Link, Series} from '../store';
import {config} from '../../../config';
import {logger} from '../../../logger';
import {LinkFilterOptions} from './link-types';
import {getStoreSeriesLinks, getAllSeriesNamesCombined} from './link-fetcher';
import {getAllSeriesNames} from './file-loader';
import {filterLinks} from './link-filters';
import {clearLinkCache} from './link-cache';

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
  const useCentralizedData = filterOptions?.useCentralizedData ?? false;
  
  // Determine which series to load links for
  const activeSeriesList = config.store.showOnlySeries.length > 0 
    ? config.store.showOnlySeries 
    : (useCentralizedData ? getAllSeriesNamesCombined() : getAllSeriesNames());
  
  let allLinks: Link[] = [];
  
  // Load links for each active series
  for (const series of activeSeriesList) {
    try {
      const seriesLinks = await getStoreSeriesLinks(
        storeName, 
        series as Series,
        useCentralizedData
      );
      allLinks = allLinks.concat(seriesLinks);
    } catch (error) {
      logger.debug(`No links found for store ${storeName}, series ${series}`);
    }
  }
  
  // Apply additional filtering
  return filterLinks(allLinks, filterOptions);
}

/**
 * Exports link cache clearing function
 */
export {clearLinkCache};