import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amazon-it rx6800 series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.amazon.it/dp/B08MVCLBWK',
      cartUrl: 'https://www.amazon.it/gp/aws/cart/add.html?ASIN.1=B08MVCLBWK&Quantity.1=1',
    },
  ]),
];
