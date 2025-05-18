import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-de ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.amazon.de/dp/B0815Y8J9N',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B0815Y8J9N&Quantity.1=1',
    },
  ]),
];
