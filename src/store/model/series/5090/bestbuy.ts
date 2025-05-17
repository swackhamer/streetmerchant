import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy 5090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5090', [
    {
      url: 'https://api.bestbuy.com/click/-/6614151/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614151/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5090', [
    {
      model: 'master ice',
      url: 'https://api.bestbuy.com/click/-/6617487/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6617487/cart',
    },
    {
      model: 'aorus master',
      url: 'https://api.bestbuy.com/click/-/6615931/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615931/cart',
    },
    {
      model: 'windforce oc',
      url: 'https://api.bestbuy.com/click/-/6615930/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615930/cart',
    },
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6615929/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615929/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '5090', [
    {
      model: 'gaming trio oc',
      url: 'https://api.bestbuy.com/click/-/6616090/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6616090/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5090', [
    {
      model: 'tuf gaming oc',
      url: 'https://api.bestbuy.com/click/-/6614122/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614122/cart',
    },
    {
      model: 'astral',
      url: 'https://api.bestbuy.com/click/-/6614120/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614120/cart',
    },
    {
      model: 'tuf gaming',
      url: 'https://api.bestbuy.com/click/-/6614119/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614119/cart',
    },
  ]),

];
