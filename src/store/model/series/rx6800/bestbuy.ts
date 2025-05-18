import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for bestbuy rx6800 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://api.bestbuy.com/click/-/6441020/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6441020/cart',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://api.bestbuy.com/click/-/6442077/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6442077/cart',
    },
  ]),
];
