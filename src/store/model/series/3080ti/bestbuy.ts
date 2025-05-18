import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bestbuy 3080ti series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3080ti', [
    {
      url: 'https://api.bestbuy.com/click/-/6462956/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6462956/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix',
      url: 'https://api.bestbuy.com/click/-/6466931/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6466931/cart',
    },
    {
      model: 'tuf',
      url: 'https://api.bestbuy.com/click/-/6466932/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6466932/cart',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://api.bestbuy.com/click/-/6467808/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6467808/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6466561/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6466561/cart',
    },
    {
      model: 'vision oc',
      url: 'https://api.bestbuy.com/click/-/6466564/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6466564/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'gaming x trio',
      url: 'https://api.bestbuy.com/click/-/6465803/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6465803/cart',
    },
  ]),
];
