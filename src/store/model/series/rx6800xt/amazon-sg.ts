import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amazon-sg rx6800xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.sg/dp/B08NS4W2ZY',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NS4W2ZY&Quantity.1=1',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.sg/dp/B08MVC76SR',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08MVC76SR&Quantity.1=1',
    },
    {
      model: 'nitro+',
      url: 'https://www.amazon.sg/dp/B08NXXT7WN',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXXT7WN&Quantity.1=1',
    },
    {
      model: 'pulse',
      url: 'https://www.amazon.sg/dp/B08NXYNLMR',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXYNLMR&Quantity.1=1',
    },
    {
      model: 'nitro+',
      url: 'https://www.amazon.sg/dp/B08NXVNMPQ',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NXVNMPQ&Quantity.1=1',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.sg/dp/B08N6ZLX9B',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08N6ZLX9B&Quantity.1=1',
    },
    {
      model: 'merc',
      url: 'https://www.amazon.sg/dp/B08NX14LV1',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NX14LV1&Quantity.1=1',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix lc',
      url: 'https://www.amazon.sg/dp/B08NWHKGS9',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08NWHKGS9&Quantity.1=1',
    },
  ]),
];
