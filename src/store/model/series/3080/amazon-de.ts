import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-de 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.amazon.de/dp/B08HN7VVLJ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN7VVLJ&Quantity.1=1',
    },
    {
      model: 'strix oc',
      url: 'https://www.amazon.de/dp/B08HN6KYS3',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN6KYS3&Quantity.1=1',
    },
    {
      model: 'tuf',
      url: 'https://www.amazon.de/dp/B08HN37VQK',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN37VQK&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.de/dp/B08HN4DSTC',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN4DSTC&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.amazon.de/dp/B08HGBYWQ6',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGBYWQ6&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.de/dp/B08HGYXP4C',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGYXP4C&Quantity.1=1',
    },
    {
      model: 'xc3',
      url: 'https://www.amazon.de/dp/B08HGLN78Q',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGLN78Q&Quantity.1=1',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.de/dp/B08HH1BMQQ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HH1BMQQ&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.de/dp/B08HJ9XFNM',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJ9XFNM&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.amazon.de/dp/B08KHLDS72',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHLDS72&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.de/dp/B08HHZVZ3N',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HHZVZ3N&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.de/dp/B08HLZXHZY',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HLZXHZY&Quantity.1=1',
    },
    {
      model: 'vision oc',
      url: 'https://www.amazon.de/dp/B08KH7RL89',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KH7RL89&Quantity.1=1',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'twin x2 oc',
      url: 'https://www.amazon.de/dp/B08JD6QPXD',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JD6QPXD&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.de/dp/B08HM4V2DH',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HM4V2DH&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.de/dp/B08HM4M621',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HM4M621&Quantity.1=1',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.amazon.de/dp/B08JCVWTQY',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JCVWTQY&Quantity.1=1',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.amazon.de/dp/B08JCKYYL8',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JCKYYL8&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.amazon.de/dp/B08HR1NPPQ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HR1NPPQ&Quantity.1=1',
    },
  ]),
];
