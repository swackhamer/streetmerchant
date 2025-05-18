import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for corsair sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020186-NA',
    },
    {
      model: '600 platinum',
      url: 'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020182-NA',
    },
  ]),
];
