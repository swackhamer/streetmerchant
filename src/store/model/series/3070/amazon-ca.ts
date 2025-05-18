import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-ca 3070 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.ca/dp/B08KWN2LZG',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWN2LZG&Quantity.1=1',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.ca/dp/B08KWLMZV4',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08KWLMZV4&Quantity.1=1',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3',
      url: 'https://www.amazon.ca/dp/B08LW46GH2',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08LW46GH2&Quantity.1=1',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.ca/dp/B08L8L71SM',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L71SM&Quantity.1=1',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.ca/dp/B08L8L9TCZ',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08L8L9TCZ&Quantity.1=1',
    },
  ]),
];
