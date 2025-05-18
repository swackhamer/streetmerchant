import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bestbuy 4090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('4090', [
    {
      url: 'https://api.bestbuy.com/click/-/6521430/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6521430/cart',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '4090', [
    {
      model: 'xlr8 gaming',
      url: 'https://api.bestbuy.com/click/-/6522679/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6522679/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '4090', [
    {
      model: 'strix',
      url: 'https://api.bestbuy.com/click/-/6524435/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6524435/cart',
    },
    {
      model: 'tuf',
      url: 'https://api.bestbuy.com/click/-/6524436/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6524436/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '4090', [
    {
      model: 'gaming trio',
      url: 'https://api.bestbuy.com/click/-/6522371/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6522371/cart',
    },
    {
      model: 'suprim liquid x',
      url: 'https://api.bestbuy.com/click/-/6522334/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6522334/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '4090', [
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6521518/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6521518/cart',
    },
    {
      model: 'windforce',
      url: 'https://api.bestbuy.com/click/-/6521517/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6521517/cart',
    },
  ]),
];
