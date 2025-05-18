/**
 * Link generator for stores
 * Maintained for backwards compatibility with existing code
 */
import {Link} from './types';
import {logger} from '../../logger';

/**
 * Generate links for a store based on format string and parameters
 *
 * @param store Store name or object to generate links for
 * @param urls Optional array of URL format strings with placeholders
 * @param params Optional parameters to substitute in format strings
 */
export function generateLinks(
  store: string | any,
  urls?: string[],
  params?: Record<string, any>[]
): Link[] {
  // Handle case when store object is passed
  const storeName = typeof store === 'string' ? store : store.name;

  // Default values for backward compatibility
  urls = urls || [];
  params = params || [];

  if (typeof store === 'object' && store.links) {
    return store.links;
  }
  logger.debug(`Generating links for ${store}...`);

  const links: Link[] = [];

  for (const url of urls) {
    for (const param of params) {
      try {
        // Create formatted URL by replacing placeholders
        let formattedUrl = url;

        for (const [key, value] of Object.entries(param)) {
          formattedUrl = formattedUrl.replace(new RegExp(`{${key}}`, 'g'), value);
        }

        // Skip if URL still has unreplaced placeholders
        if (formattedUrl.includes('{') && formattedUrl.includes('}')) {
          continue;
        }

        // Create link object
        links.push({
          brand: param.brand,
          model: param.model,
          series: param.series,
          url: formattedUrl,
        });
      } catch (error) {
        logger.error(`Error generating link for ${store}: ${error}`);
      }
    }
  }

  logger.debug(`Generated ${links.length} links for ${store}`);
  return links;
}
