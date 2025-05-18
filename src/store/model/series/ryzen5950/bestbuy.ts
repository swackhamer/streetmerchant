import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://api.bestbuy.com/click/-/6438941/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6438941/cart',
    },
  ]),
];
