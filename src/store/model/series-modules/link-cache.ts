/**
 * Link cache management
 */
import {Link} from '../store';

// Cache for loaded link modules
const linkCache: Record<string, Link[]> = {};

/**
 * Stores links in the cache
 * 
 * @param storeName The name of the store
 * @param series The series
 * @param links The links to cache
 * @param type Cache type ('file' or 'data')
 */
export function cacheLinksBySeries(
  storeName: string, 
  series: string, 
  links: Link[],
  type: 'file' | 'data' = 'file'
): void {
  const cacheKey = `${type}_${storeName}_${series}`;
  linkCache[cacheKey] = links;
}

/**
 * Retrieves links from the cache
 * 
 * @param storeName The name of the store
 * @param series The series
 * @param type Cache type ('file' or 'data')
 * @returns Cached links or undefined if not cached
 */
export function getCachedLinks(
  storeName: string, 
  series: string,
  type: 'file' | 'data' = 'file'
): Link[] | undefined {
  const cacheKey = `${type}_${storeName}_${series}`;
  return linkCache[cacheKey];
}

/**
 * Clears the link cache
 */
export function clearLinkCache(): void {
  Object.keys(linkCache).forEach(key => {
    delete linkCache[key];
  });
}