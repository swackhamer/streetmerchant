import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amazon-de ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.amazon.de/dp/B08164VTWH',
      cartUrl: 'https://www.amazon.de/gp/aws/cart/add.html?ASIN.1=B08164VTWH&Quantity.1=1',
    },
  ]),
];
