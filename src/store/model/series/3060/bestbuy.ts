import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy 3060 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'ventus 3x',
      url: 'https://api.bestbuy.com/click/-/6452940/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6452940/cart',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://api.bestbuy.com/click/-/6454328/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6454328/cart',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060', [
    {
      model: 'dual fan',
      url: 'https://api.bestbuy.com/click/-/6454319/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6454319/cart',
    },
    {
      model: 'single fan',
      url: 'https://api.bestbuy.com/click/-/6454318/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6454318/cart',
    },
  ]),
];
