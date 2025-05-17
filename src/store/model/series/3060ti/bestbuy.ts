import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy 3060ti series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3060ti', [
    {
      url: 'https://api.bestbuy.com/click/-/6439402/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439402/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x',
      url: 'https://api.bestbuy.com/click/-/6441172/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6441172/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6442484/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6442484/cart',
    },
    {
      model: 'eagle',
      url: 'https://api.bestbuy.com/click/-/6442485/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6442485/cart',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'xlr8 uprising',
      url: 'https://api.bestbuy.com/click/-/6446660/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6446660/cart',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://api.bestbuy.com/click/-/6444445/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6444445/cart',
    },
    {
      model: 'ftw3',
      url: 'https://api.bestbuy.com/click/-/6444444/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6444444/cart',
    },
    {
      model: 'ftw3',
      url: 'https://api.bestbuy.com/click/-/6444449/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6444449/cart',
    },
  ]),

];
