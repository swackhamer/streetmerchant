import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amazon-sg rx6900xt series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.sg/dp/B08PHWJC8X',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08PHWJC8X&Quantity.1=1',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.sg/dp/B08PDQJVD9',
      cartUrl: 'https://www.amazon.sg/gp/aws/cart/add.html?ASIN.1=B08PDQJVD9&Quantity.1=1',
    },
  ]),
];
