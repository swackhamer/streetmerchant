import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bestbuy sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://api.bestbuy.com/click/-/6351845/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6351845/cart',
    },
    {
      model: '600 platinum',
      url: 'https://api.bestbuy.com/click/-/6351844/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6351844/cart',
    },
  ]),
];
