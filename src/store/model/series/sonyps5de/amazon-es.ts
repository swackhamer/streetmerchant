import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-es sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.amazon.es/dp/B08KJF2D25',
      cartUrl: 'https://www.amazon.es/gp/aws/cart/add.html?ASIN.1=B08KJF2D25&Quantity.1=1',
    },
  ]),
];
