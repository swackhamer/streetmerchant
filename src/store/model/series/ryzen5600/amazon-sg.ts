import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-sg ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.amazon.sg/dp/B08166SLDF',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08166SLDF&Quantity.1=1',
    },
  ]),
];
