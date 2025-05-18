import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy 5080 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5080', [
    {
      url: 'https://api.bestbuy.com/click/-/6614153/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614153/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5080', [
    {
      model: 'windforce oc',
      url: 'https://api.bestbuy.com/click/-/6616102/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6616102/cart',
    },
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6615925/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615925/cart',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://api.bestbuy.com/click/-/6615927/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615927/cart',
    },
    {
      model: 'master ice',
      url: 'https://api.bestbuy.com/click/-/6615934/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615934/cart',
    },
    {
      model: 'master',
      url: 'https://api.bestbuy.com/click/-/6615924/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615924/cart',
    },
    {
      model: 'aero oc sff',
      url: 'https://api.bestbuy.com/click/-/6616100/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6616100/cart',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://api.bestbuy.com/click/-/6615928/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615928/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5080', [
    {
      model: 'prime',
      url: 'https://api.bestbuy.com/click/-/6615831/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615831/cart',
    },
    {
      model: 'tuf gaming oc',
      url: 'https://api.bestbuy.com/click/-//pdp',
      cartUrl: 'https://api.bestbuy.com/click/-//cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '5080', [
    {
      model: 'suprim soc',
      url: 'https://api.bestbuy.com/click/-/6615232/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6615232/cart',
    },
  ]),
];
