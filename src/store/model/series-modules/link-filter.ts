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
  const filteredByShowOnly = config.store.showOnlySeries.length > 0
    ? links.filter(link => config.store.showOnlySeries.includes(link.series))
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
