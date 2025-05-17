/**
 * Series Data - Centralized data storage for product links
 * 
 * This file provides a data-driven approach to storing product links
 * organized by series and store, rather than having separate files for each.
 */
import {Link, Series, Brand, Model} from './store';
import {config} from '../../config';

/**
 * Type definition for series data structure
 * Organized as: series -> store -> links
 */
export type SeriesData = {
  [key in Series]?: {
    [storeName: string]: Link[];
  };
};

/**
 * Central repository for product links organized by series and store
 */
export const seriesData: SeriesData = {};

/**
 * Helper function to retrieve links for a specific series and store
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
export function getAllLinksForSeries(series: Series): {[store: string]: Link[]} {
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
export function getStoreSeriesLinksFromData(
  storeName: string
): Link[] {
  const links: Link[] = [];

  // Iterate through all series in the centralized data
  for (const series of getAllSeries()) {
    if (config.store.showOnlySeries.length > 0 && !config.store.showOnlySeries.includes(series as Series)) {
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

/**
 * Gets all series names from data
 */
export function getAllSeriesNamesFromData(): Series[] {
  return getAllSeries();
}

/**
 * Filters links from series data based on config
 */
export function filterSeriesDataLinks(links: Link[]): Link[] {
  return links.filter(link => {
    // Filter by series
    if (config.store.showOnlySeries.length > 0 && !config.store.showOnlySeries.includes(link.series)) {
      return false;
    }
    
    // Filter by brand
    if (config.store.showOnlyBrands.length > 0 && !config.store.showOnlyBrands.includes(link.brand)) {
      return false;
    }
    
    // Filter by model is more complex and handled separately
    // This is a simplified version that matches the pattern in store/filter.ts
    if (config.store.showOnlyModels.length > 0) {
      const sanitizedModel = link.model.replace(/\s/g, '');
      const sanitizedSeries = link.series.replace(/\s/g, '');
      
      for (const configModelEntry of config.store.showOnlyModels) {
        const sanitizedConfigModel = configModelEntry.name.replace(/\s/g, '');
        const sanitizedConfigSeries = configModelEntry.series.replace(/\s/g, '');
        
        if (sanitizedConfigSeries) {
          if (
            sanitizedSeries === sanitizedConfigSeries &&
            sanitizedModel === sanitizedConfigModel
          ) {
            return true;
          }
        } else if (sanitizedModel === sanitizedConfigModel) {
          return true;
        }
      }
      return false;
    }
    
    return true;
  });
}