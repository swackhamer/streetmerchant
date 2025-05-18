import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-sg sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://www.amazon.sg/dp/B07M63H81H',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B07M63H81H&Quantity.1=1',
    },
    {
      model: '600 platinum',
      url: 'https://www.amazon.sg/dp/B07F84FJ1G',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B07F84FJ1G&Quantity.1=1',
    },
  ]),
];
