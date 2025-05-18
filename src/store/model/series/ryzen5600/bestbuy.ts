import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://api.bestbuy.com/click/-/6438943/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6438943/cart',
    },
  ]),
];
