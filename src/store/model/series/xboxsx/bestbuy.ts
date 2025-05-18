import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://api.bestbuy.com/click/-/6428324/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6428324/cart',
    },
  ]),
];
