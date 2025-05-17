/**
 * Data access functions for retrieving series links
 *
 * This module provides helper functions to access the centralized series data.
 */
import {Link, Series} from '../store';
import {seriesData} from './data-store';
import {config} from '../../../config';

/**
 * Gets links for a specific series and store
 */
export function getLinksForSeriesAndStore(
  series: Series,
  storeName: string
): Link[] {
  if (!seriesData[series]) {
    return [];
  }

  return seriesData[series]?.[storeName] || [];
}

/**
 * Helper function to retrieve all links for a specific series
 */
export function getAllLinksForSeries(series: Series): {
  [store: string]: Link[];
} {
  return seriesData[series] || {};
}

/**
 * Helper function to get all available series
 */
export function getAllSeries(): Series[] {
  return Object.keys(seriesData) as Series[];
}

/**
 * Gets all links for a store from the centralized data by series
 */
export function getStoreSeriesLinksFromData(storeName: string): Link[] {
  const links: Link[] = [];

  // Iterate through all series in the centralized data
  for (const series of getAllSeries()) {
    if (
      config.store.showOnlySeries.length > 0 &&
      !config.store.showOnlySeries.includes(series as Series)
    ) {
      continue;
    }

    // Get links for this store and series
    const seriesLinks = getLinksForSeriesAndStore(series as Series, storeName);
    if (seriesLinks.length > 0) {
      links.push(...seriesLinks);
    }
  }

  return links;
}
