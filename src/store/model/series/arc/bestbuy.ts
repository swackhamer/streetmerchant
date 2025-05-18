import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy arc series
 */
export const links: Link[] = [
  // Intel Cards
  ...createBrandSeriesLinks('intel', 'arc', [
    {
      model: 'b580',
      url: 'https://api.bestbuy.com/click/-/6614154/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614154/cart',
    },
  ]),
];
