import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bestbuy 3090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3090', [
    {
      url: 'https://api.bestbuy.com/click/-/6429434/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6429434/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://api.bestbuy.com/click/-/6432447/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432447/cart',
    },
    {
      model: 'tuf',
      url: 'https://api.bestbuy.com/click/-/6432446/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432446/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://api.bestbuy.com/click/-/6430215/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430215/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming',
      url: 'https://api.bestbuy.com/click/-/6430623/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430623/cart',
    },
    {
      model: 'eagle',
      url: 'https://api.bestbuy.com/click/-/6430624/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430624/cart',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'xc3',
      url: 'https://api.bestbuy.com/click/-/6434363/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6434363/cart',
    },
    {
      model: 'ftw3',
      url: 'https://api.bestbuy.com/click/-/6436193/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436193/cart',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://api.bestbuy.com/click/-/6436192/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436192/cart',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 revel',
      url: 'https://api.bestbuy.com/click/-/6432657/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432657/cart',
    },
  ]),
];
