import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for officedepot 3070 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.officedepot.com/a/products/1992758/PNY-GeForce-RTX-3070-8GB-GDDR6/',
    },
  ]),
];
