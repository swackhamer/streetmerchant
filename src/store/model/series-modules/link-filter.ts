/**
 * Link filtering functions for series data
 *
 * This module provides functions to filter links based on configuration.
 */
import {Link} from '../store';
import {config} from '../../../config';

/**
 * Filters links from series data based on config
 */
export function filterSeriesDataLinks(links: Link[]): Link[] {
  // Debug all link series before filtering
  if (links.length > 0) {
    console.log(`[DEBUG] Processing ${links.length} links for filtering`);
    
    // Count links by series
    const seriesCounts = new Map<string, number>();
    for (const link of links) {
      const series = link.series || 'undefined';
      const count = seriesCounts.get(series) || 0;
      seriesCounts.set(series, count + 1);
    }
    
    // Log series breakdown
    console.log(`[DEBUG] Links by series before filtering:`);
    for (const [series, count] of seriesCounts.entries()) {
      console.log(`[DEBUG]   - ${series}: ${count} links`);
    }
  }
  
  const filteredByShowOnly = config.store.showOnlySeries.length > 0
    ? links.filter(link => {
        const included = config.store.showOnlySeries.includes(link.series);
        if (!included) {
          console.log(`[DEBUG] Filtering out link with series ${link.series}, not in showOnlySeries ${JSON.stringify(config.store.showOnlySeries)}`);
        }
        return included;
      })
    : links;
  
  // Add explicit debug - will show in logs
  if (config.store.showOnlySeries.includes('5090')) {
    const fiveNinetyLinks = filteredByShowOnly.filter(link => link.series === '5090');
    console.log(`[DEBUG] Found ${fiveNinetyLinks.length} links for 5090 series`);
    
    for (const link of fiveNinetyLinks) {
      console.log(`[DEBUG] 5090 link: ${link.url}, brand: ${link.brand}, model: ${link.model}`);
    }
  }
  
  return filteredByShowOnly.filter(link => {

    // Filter by brand
    if (
      config.store.showOnlyBrands.length > 0 &&
      !config.store.showOnlyBrands.includes(link.brand)
    ) {
      return false;
    }

    // Filter by model
    if (config.store.showOnlyModels.length > 0) {
      const sanitizedModel = link.model.replace(/\\s/g, '');
      const sanitizedSeries = link.series.replace(/\\s/g, '');

      for (const configModelEntry of config.store.showOnlyModels) {
        const sanitizedConfigModel = configModelEntry.name.replace(/\\s/g, '');
        const sanitizedConfigSeries = configModelEntry.series.replace(
          /\\s/g,
          ''
        );

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
