import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bestbuy xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://api.bestbuy.com/click/-/6430277/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430277/cart',
    },
  ]),
];
