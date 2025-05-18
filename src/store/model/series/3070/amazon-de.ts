import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-de 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.amazon.de/dp/B08HSJ1622',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HSJ1622&Quantity.1=1',
    },
    {
      model: 'dual oc',
      url: 'https://www.amazon.de/dp/B08KHFZN9P',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHFZN9P&Quantity.1=1',
    },
    {
      model: 'strix',
      url: 'https://www.amazon.de/dp/B08HT7PR9Y',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HT7PR9Y&Quantity.1=1',
    },
    {
      model: 'strix oc',
      url: 'https://www.amazon.de/dp/B08L8JNTXQ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.amazon.de/dp/B08KWPDXJZ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.de/dp/B08L6PCZTR',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L6PCZTR&Quantity.1=1',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.de/dp/B08KWN2LZG',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'vision oc',
      url: 'https://www.amazon.de/dp/B08M13DXSZ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.de/dp/B08KHL21CV',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHL21CV&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.de/dp/B08KHL2J5X',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHL2J5X&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://www.amazon.de/dp/B08L3QCZKZ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L3QCZKZ&Quantity.1=1',
    },
    {
      model: 'xc3',
      url: 'https://www.amazon.de/dp/B08L3QZP7W',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L3QZP7W&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.de/dp/B08L3Q41SM',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08L3Q41SM&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.amazon.de/dp/B08HRBR7K9',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HRBR7K9&Quantity.1=1',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.amazon.de/dp/B08LBVNKT1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08LBVNKT1&Quantity.1=1',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.amazon.de/dp/B08HBF5L3K',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.de/dp/B08HBJB7YD',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
    },
  ]),
];
