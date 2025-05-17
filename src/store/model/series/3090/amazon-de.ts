import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-de 3090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3090', [
    {
      url: 'https://www.amazon.de/dp/B08HR6ZBYJ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HR6ZBYJ&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.amazon.de/dp/B08HN642LY',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN642LY&Quantity.1=1',
    },
    {
      model: 'strix oc',
      url: 'https://www.amazon.de/dp/B08HN51T8Q',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN51T8Q&Quantity.1=1',
    },
    {
      model: 'tuf',
      url: 'https://www.amazon.de/dp/B08HN4FLFJ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN4FLFJ&Quantity.1=1',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.de/dp/B08HN5B8FJ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HN5B8FJ&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.amazon.de/dp/B08HGFNPJQ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGFNPJQ&Quantity.1=1',
    },
    {
      model: 'ftw3',
      url: 'https://www.amazon.de/dp/B08J5NMDP7',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08J5NMDP7&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.de/dp/B08HGS1SXH',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGS1SXH&Quantity.1=1',
    },
    {
      model: 'xc3',
      url: 'https://www.amazon.de/dp/B08HGZ4XSZ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGZ4XSZ&Quantity.1=1',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.de/dp/B08HGKQ527',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGKQ527&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.de/dp/B08HGTNDL4',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HGTNDL4&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.amazon.de/dp/B08KH7R4FQ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KH7R4FQ&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.de/dp/B08HJPDJTY',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJPDJTY&Quantity.1=1',
    },
    {
      model: 'turbo',
      url: 'https://www.amazon.de/dp/B08KHKDTSJ',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08KHKDTSJ&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.de/dp/B08HJRF2CN',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJRF2CN&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.de/dp/B08HRBW6VB',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HRBW6VB&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.de/dp/B08HM661YM',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HM661YM&Quantity.1=1',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gaming pro',
      url: 'https://www.amazon.de/dp/B08JQQ1VD1',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08JQQ1VD1&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.amazon.de/dp/B08HJQ182D',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08HJQ182D&Quantity.1=1',
    },
  ]),

];
