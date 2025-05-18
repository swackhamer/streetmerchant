import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy ryzen7950x series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen7950x', [
    {
      model: '7950x',
      url: 'https://api.bestbuy.com/click/-/6519470/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6519470/cart',
    },
  ]),
];
