import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy 3070 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3070', [
    {
      url: 'https://api.bestbuy.com/click/-/6429442/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6429442/cart',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://api.bestbuy.com/click/-/6439300/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439300/cart',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://api.bestbuy.com/click/-/6439301/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439301/cart',
    },
    {
      model: 'xc3 ultra',
      url: 'https://api.bestbuy.com/click/-/6439299/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439299/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://api.bestbuy.com/click/-/6437912/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6437912/cart',
    },
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6437909/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6437909/cart',
    },
    {
      model: 'aorus',
      url: 'https://api.bestbuy.com/click/-/6439384/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439384/cart',
    },
    {
      model: 'vision',
      url: 'https://api.bestbuy.com/click/-/6439385/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439385/cart',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://api.bestbuy.com/click/-/6432654/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432654/cart',
    },
    {
      model: 'xlr8 revel',
      url: 'https://api.bestbuy.com/click/-/6432653/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432653/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf',
      url: 'https://api.bestbuy.com/click/-/6439128/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439128/cart',
    },
    {
      model: 'strix',
      url: 'https://api.bestbuy.com/click/-/6439127/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439127/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x oc',
      url: 'https://api.bestbuy.com/click/-/6438278/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6438278/cart',
    },
  ]),
];
