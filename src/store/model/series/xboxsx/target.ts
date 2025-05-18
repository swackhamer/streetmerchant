import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for target xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.target.com/p/xbox-series-x-console/-/A-80790841',
    },
  ]),
];
