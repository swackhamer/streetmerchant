import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://api.bestbuy.com/click/-/6439000/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439000/cart',
    },
  ]),
];
