import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-ca 3090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.amazon.ca/dp/B08HJQ182D',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.ca/dp/B08HR9D2JS',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HR9D2JS&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.ca/dp/B08HJRF2CN',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.ca/dp/B08HJPDJTY',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.amazon.ca/dp/B08HJGNJ81',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJGNJ81&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.ca/dp/B08HJLLF7G',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08HJLLF7G&Quantity.1=1',
    },
  ]),
];
