/**
 * Factory functions for creating AMD-specific links
 */
import {Link, Series} from '../store';
import {createBrandSeriesLinks} from './link-factory';

/**
 * Create AMD reference links for a specific series
 */
export function createAmdReferenceLinks(
  series: Series,
  configs: Array<{
    url: string;
    cartUrl?: string;
    itemNumber?: string;
    price?: number;
  }>
): Link[] {
  return createBrandSeriesLinks(
    'amd',
    series,
    configs.map(config => ({
      model: 'amd reference',
      ...config,
    }))
  );
}
