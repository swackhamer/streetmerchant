import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon 3080 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.com/dp/B08HBR7QBM',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBR7QBM&Quantity.1=1',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.com/dp/B08HBTJMLJ',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HBTJMLJ&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.com/dp/B08HR7SV3M',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR7SV3M&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.com/dp/B08HR5SXPS',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR5SXPS&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.com/dp/B08HR3Y5GQ',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3Y5GQ&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.com/dp/B08HR55YB5',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR55YB5&Quantity.1=1',
    },
    {
      model: 'ftw3',
      url: 'https://www.amazon.com/dp/B08HR3DPGW',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR3DPGW&Quantity.1=1',
    },
    {
      model: 'xc3',
      url: 'https://www.amazon.com/dp/B08HR4RJ3Q',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR4RJ3Q&Quantity.1=1',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.com/dp/B08HR6FMF3',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HR6FMF3&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.com/dp/B08HJTH61J',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJTH61J&Quantity.1=1',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.com/dp/B08HJS2JLJ',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJS2JLJ&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.amazon.com/dp/B08HH5WF97',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HH5WF97&Quantity.1=1',
    },
    {
      model: 'tuf',
      url: 'https://www.amazon.com/dp/B08HHDP9DW',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HHDP9DW&Quantity.1=1',
    },
    {
      model: 'strix oc',
      url: 'https://www.amazon.com/dp/B08J6F174Z',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08J6F174Z&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.amazon.com/dp/B08HJNKT3P',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HJNKT3P&Quantity.1=1',
    },
    {
      model: 'trinity oc',
      url: 'https://www.amazon.com/dp/B08HVV2P4Z',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08HVV2P4Z&Quantity.1=1',
    },
  ]),
];
