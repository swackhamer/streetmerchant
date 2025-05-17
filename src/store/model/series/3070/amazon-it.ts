import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-it 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.amazon.it/dp/B08KHFZN9P',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KHFZN9P&Quantity.1=1',
    },
    {
      model: 'dual',
      url: 'https://www.amazon.it/dp/B08L8HPKR6',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8HPKR6&Quantity.1=1',
    },
    {
      model: 'strix',
      url: 'https://www.amazon.it/dp/B08L8JNTXQ',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8JNTXQ&Quantity.1=1',
    },
    {
      model: 'tuf',
      url: 'https://www.amazon.it/dp/B08L8KC1J7',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8KC1J7&Quantity.1=1',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.it/dp/B08KY266MG',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
    },
    {
      model: 'gaming oc',
      url: 'https://www.amazon.it/dp/B08KY266MG',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KY266MG&Quantity.1=1',
    },
    {
      model: 'vision oc',
      url: 'https://www.amazon.it/dp/B08M13DXSZ',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08M13DXSZ&Quantity.1=1',
    },
    {
      model: 'eagle',
      url: 'https://www.amazon.it/dp/B08KXZV626',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KXZV626&Quantity.1=1',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming',
      url: 'https://www.amazon.it/dp/B08KWN2LZG',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.amazon.it/dp/B08KWPDXJZ',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KWPDXJZ&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.it/dp/B08KWLMZV4',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 revel',
      url: 'https://www.amazon.it/dp/B08HBJB7YD',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBJB7YD&Quantity.1=1',
    },
    {
      model: 'xlr8 uprising',
      url: 'https://www.amazon.it/dp/B08HBF5L3K',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08HBF5L3K&Quantity.1=1',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'gaming',
      url: 'https://www.amazon.it/dp/B08LF32LJ6',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08LF32LJ6&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.it/dp/B08L8L71SM',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.it/dp/B08L8L9TCZ',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
    },
  ]),

];
