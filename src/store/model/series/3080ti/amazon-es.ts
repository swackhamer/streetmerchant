import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-es 3080ti series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.es/dp/B09622N253',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B09622N253&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.es/dp/B0963TJNHG',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0963TJNHG&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.es/dp/B0979GYMHP',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0979GYMHP&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'suprim x',
      url: 'https://www.amazon.es/dp/B0957WCY1M',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0957WCY1M&Quantity.1=1',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080ti', [
    {
      model: 'ichill x4',
      url: 'https://www.amazon.es/dp/B096MVB4KP',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B096MVB4KP&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'trinity',
      url: 'https://www.amazon.es/dp/B0964DB2P9',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0964DB2P9&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.es/dp/B0957TV4YR',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B0957TV4YR&Quantity.1=1',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080ti', [
    {
      model: 'gamerock',
      url: 'https://www.amazon.es/dp/B096KTPQ9J',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B096KTPQ9J&Quantity.1=1',
    },
    {
      model: 'gaming pro',
      url: 'https://www.amazon.es/dp/B096KVBBHQ',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B096KVBBHQ&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.es/dp/B095X51RHY',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B095X51RHY&Quantity.1=1',
    },
    {
      model: 'aorus master',
      url: 'https://www.amazon.es/dp/B095X622XV',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B095X622XV&Quantity.1=1',
    },
    {
      model: 'vision oc',
      url: 'https://www.amazon.es/dp/B095X7V2HH',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B095X7V2HH&Quantity.1=1',
    },
  ]),
];
