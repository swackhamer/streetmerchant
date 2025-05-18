import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon 3060 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://www.amazon.com/dp/B08WM28PVH',
      cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08WM28PVH&Quantity.1=1',
    },
  ]),
];
