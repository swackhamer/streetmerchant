import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for bestbuy rx6800xt series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://api.bestbuy.com/click/-/6440913/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6440913/cart',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://api.bestbuy.com/click/-/6441226/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6441226/cart',
    },
    {
      model: 'merc',
      url: 'https://api.bestbuy.com/click/-/6442585/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6442585/cart',
    },
  ]),

];
