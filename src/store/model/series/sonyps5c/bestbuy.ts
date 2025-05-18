import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://api.bestbuy.com/click/-/6426149/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6426149/cart',
    },
  ]),
];
