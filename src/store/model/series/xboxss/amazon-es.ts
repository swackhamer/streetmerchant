import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-es xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.amazon.es/dp/B087VM5XC6',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B087VM5XC6&Quantity.1=1',
    },
  ]),
];
