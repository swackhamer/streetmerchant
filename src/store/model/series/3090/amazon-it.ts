import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-it 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix oc',
      url: 'https://www.amazon.it/dp/B08J6GMWCQ',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08J6GMWCQ&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.it/dp/B08HJGNJ81',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.it/dp/B08HJLLF7G',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.amazon.it/dp/B08HJQ182D',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.it/dp/B08HBQWBHH',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.it/dp/B08HBVX53D',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBVX53D&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.it/dp/B08HRBW6VB',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.amazon.it/dp/B08HR9D2JS',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.it/dp/B08HJRF2CN',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.it/dp/B08HJPDJTY',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
    },
  ]),
];
