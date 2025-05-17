import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for bestbuy rx6900xt series
 */
export const links: Link[] = [
  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://api.bestbuy.com/click/-/6444358/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6444358/cart',
    },
    {
      model: 'merc',
      url: 'https://api.bestbuy.com/click/-/6445157/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6445157/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://api.bestbuy.com/click/-/6444716/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6444716/cart',
    },
  ]),

];
