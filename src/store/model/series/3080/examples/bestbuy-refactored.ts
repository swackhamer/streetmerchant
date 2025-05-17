import {Link} from '../../../store';
import {
  createLink, 
  createFoundersEditionLinks,
  createBrandSeriesLinks
} from '../../../common/link-factory';

/**
 * Product links for BestBuy RTX 3080 series
 * Using link factory methods to reduce duplication
 */
export const links: Link[] = [
  // Test link
  createLink({
    brand: 'test:brand',
    model: 'test:model',
    series: 'test:series',
    url: 'https://api.bestbuy.com/click/-/6489491/pdp',
  }),
  
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3080', [
    {
      url: 'https://api.bestbuy.com/click/-/6429440/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6429440/cart',
    },
  ]),
  
  // ASUS Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://api.bestbuy.com/click/-/6432445/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432445/cart',
    },
    {
      model: 'tuf',
      url: 'https://api.bestbuy.com/click/-/6439128/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6439128/cart',
    },
  ]),
  
  // EVGA Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://api.bestbuy.com/click/-/6432399/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432399/cart',
    },
    {
      model: 'xc3',
      url: 'https://api.bestbuy.com/click/-/6436194/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436194/cart',
    },
    {
      model: 'xc3 ultra',
      url: 'https://api.bestbuy.com/click/-/6432400/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432400/cart',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://api.bestbuy.com/click/-/6436196/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436196/cart',
    },
    {
      model: 'ftw3',
      url: 'https://api.bestbuy.com/click/-/6436191/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436191/cart',
    },
  ]),
  
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://api.bestbuy.com/click/-/6430620/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430620/cart',
    },
    {
      model: 'eagle oc',
      url: 'https://api.bestbuy.com/click/-/6430621/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430621/cart',
    },
    {
      model: 'vision oc',
      url: 'https://api.bestbuy.com/click/-/6436219/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436219/cart',
    },
    {
      model: 'aorus master',
      url: 'https://api.bestbuy.com/click/-/6436223/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6436223/cart',
    },
  ]),
  
  // MSI Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://api.bestbuy.com/click/-/6430175/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6430175/cart',
    },
  ]),
  
  // PNY Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://api.bestbuy.com/click/-/6432655/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432655/cart',
    },
    {
      model: 'xlr8 revel',
      url: 'https://api.bestbuy.com/click/-/6432658/pdp',
      cartUrl: 'https://api.bestbuy.com/click/-/6432658/cart',
    },
  ]),
];