import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://api.bestbuy.com/click/-/6438942/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6438942/cart',
    },
  ]),
];
