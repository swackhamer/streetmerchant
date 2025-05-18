import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for noelleeming xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.noelleeming.co.nz/prod193770.html',
    },
  ]),
];
