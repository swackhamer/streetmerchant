/**
 * Series link fetcher that combines file-based and data-driven approaches
 */
import {Link, Series} from '../store';
import {getStoreSeriesLinksFromFiles, getAllSeriesNames} from './file-loader';
import {getStoreSeriesLinksFromData, getAllSeries} from './data-access';

/**
 * Gets all available series names from both directory and data
 */
export function getAllSeriesNamesCombined(): string[] {
  const seriesFromDir = getAllSeriesNames();
  const seriesFromData = getAllSeries();
  
  // Combine and deduplicate
  return [...new Set([...seriesFromDir, ...seriesFromData])];
}

/**
 * Gets links for a specific store and series
 * Checks both file-based and data-driven approaches
 * 
 * @param storeName The name of the store
 * @param series The series to get links for
 * @param useCentralizedData Whether to use the data-driven approach
 * @returns Links for the specified store and series
 */
export async function getStoreSeriesLinks(
  storeName: string, 
  series: Series,
  useCentralizedData = false
): Promise<Link[]> {
  // First try to get links from the centralized data if enabled
  if (useCentralizedData) {
    const allDataLinks = getStoreSeriesLinksFromData(storeName);
    const seriesLinks = allDataLinks.filter(link => link.series === series);
    if (seriesLinks.length > 0) {
      return seriesLinks;
    }
  }
  
  // Fall back to file-based approach
  return getStoreSeriesLinksFromFiles(storeName, series);
}