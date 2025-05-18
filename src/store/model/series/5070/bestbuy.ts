import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy 5070 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5070', [
    {
      url: 'https://api.bestbuy.com/click/-/6614154/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614154/cart',
    },
  ]),
];
