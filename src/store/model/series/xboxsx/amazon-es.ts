import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-es xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.amazon.es/dp/B08H93ZRLL',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08H93ZRLL&Quantity.1=1',
    },
  ]),
];
