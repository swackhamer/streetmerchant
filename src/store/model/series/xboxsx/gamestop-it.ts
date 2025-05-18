import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for gamestop-it xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.gamestop.it/XboxSeriesX/Games/132509',
    },
  ]),
];
