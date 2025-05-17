import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bestbuy 4080-16g series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('4080-16g', [
    {
      url: 'https://api.bestbuy.com/click/-/6614154/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6614154/cart',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '4080-16g', [
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6524517/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6524517/cart',
    },
    {
      model: 'aero oc',
      url: 'https://api.bestbuy.com/click/-/6525660/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6525660/cart',
    },
    {
      model: 'eagle',
      url: 'https://api.bestbuy.com/click/-/6525662/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6525662/cart',
    },
    {
      model: 'eagle oc',
      url: 'https://api.bestbuy.com/click/-/6525663/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6525663/cart',
    },
    {
      model: 'master',
      url: 'https://api.bestbuy.com/click/-/6525661/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6525661/cart',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '4080-16g', [
    {
      model: 'ventus 3x oc',
      url: 'https://api.bestbuy.com/click/-/6524441/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6524441/cart',
    },
    {
      model: 'gaming x trio',
      url: 'https://api.bestbuy.com/click/-/6524440/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6524440/cart',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '4080-16g', [
    {
      model: 'strix',
      url: 'https://api.bestbuy.com/click/-/6525658/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6525658/cart',
    },
    {
      model: 'tuf',
      url: 'https://api.bestbuy.com/click/-/6525659/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6525659/cart',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '4080-16g', [
    {
      model: 'xlr8',
      url: 'https://api.bestbuy.com/click/-/6522940/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6522940/cart',
    },
  ]),

];
