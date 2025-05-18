import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-ca sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.amazon.ca/dp/B08GSC5D9G',
      cartUrl: 'https://www.amazon.ca/gp/aws/cart/add.html?ASIN.1=B08GSC5D9G&Quantity.1=1',
    },
  ]),
];
