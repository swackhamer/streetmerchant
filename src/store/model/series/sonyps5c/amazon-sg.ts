import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-sg sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.amazon.sg/dp/B08FC5L3RG',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08FC5L3RG&Quantity.1=1',
    },
    {
      model: 'ps5 console',
      url: 'https://www.amazon.sg/dp/B08HNRSVQP',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08HNRSVQP&Quantity.1=1',
    },
  ]),
];
