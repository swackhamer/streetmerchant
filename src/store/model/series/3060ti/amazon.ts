import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.amazon.com/dp/B08P2HBBLX',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2HBBLX&Quantity.1=1',
    },
    {
      model: 'tuf',
      url: 'https://www.amazon.com/dp/B083Z5P6TX',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083Z5P6TX&Quantity.1=1',
    },
    {
      model: 'ko',
      url: 'https://www.amazon.com/dp/B08P2D1JZZ',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2D1JZZ&Quantity.1=1',
    },
    {
      model: 'strix',
      url: 'https://www.amazon.com/dp/B083Z7TR8Z',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083Z7TR8Z&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.com/dp/B08NYP7KG6',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYP7KG6&Quantity.1=1',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.amazon.com/dp/B08NYPLXPJ',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYPLXPJ&Quantity.1=1',
    },
    {
      model: 'eagle',
      url: 'https://www.amazon.com/dp/B08NYNJ6RC',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYNJ6RC&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.com/dp/B08NYPKW1Z',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08NYPKW1Z&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.com/dp/B08P2D3JSG',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2D3JSG&Quantity.1=1',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.amazon.com/dp/B08P2DQ28S',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2DQ28S&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.amazon.com/dp/B08P3XJLJJ',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3XJLJJ&Quantity.1=1',
    },
    {
      model: 'twin edge',
      url: 'https://www.amazon.com/dp/B08P3V572B',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P3V572B&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3',
      url: 'https://www.amazon.com/dp/B08P2H5LW2',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08P2H5LW2&Quantity.1=1',
    },
  ]),
];
