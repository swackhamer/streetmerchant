import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-it xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.amazon.it/dp/B08JDTCXRG',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08JDTCXRG&Quantity.1=1',
    },
  ]),
];
