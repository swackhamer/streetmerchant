import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-es 3090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3090', [
    {
      url: 'https://www.amazon.es/dp/B08HR6ZBYJ',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HR6ZBYJ&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.es/dp/B08J5F3G18/',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08J5F3G18&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.es/dp/B08HGS1SXH/',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HGS1SXH&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'ekwb',
      url: 'https://www.amazon.es/dp/B08R5WDMZC/',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08R5WDMZC&Quantity.1=1',
    },
    {
      model: 'strix oc',
      url: 'https://www.amazon.es/dp/B08HN51T8Q',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HN51T8Q&Quantity.1=1',
    },
    {
      model: 'ekwb',
      url: 'https://www.amazon.es/dp/B08R5WDMZC',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08R5WDMZC&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus xtreme',
      url: 'https://www.amazon.es/dp/B08KHJS572',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KHJS572&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.es/dp/B08HLYQ9XL',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HLYQ9XL&Quantity.1=1',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.amazon.es/dp/B08R5J94WP',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08R5J94WP&Quantity.1=1',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.es/dp/B08HBQWBHH',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HBQWBHH&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'suprim x',
      url: 'https://www.amazon.es/dp/B08LTJVGYS',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08LTJVGYS&Quantity.1=1',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.es/dp/B08HRBW6VB',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.es/dp/B08HM6D7TM',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08HM6D7TM&Quantity.1=1',
    },
  ]),
];
