import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amazon-nl ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.amazon.nl/dp/B0815XFSGK',
      cartUrl: 'https://www.amazon.nl/gp/aws/cart/add.html?ASIN.1=B0815XFSGK&Quantity.1=1',
    },
  ]),
];
