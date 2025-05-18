import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-it xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.amazon.it/dp/B08JDSW1ZW',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08JDSW1ZW&Quantity.1=1',
    },
  ]),
];
