import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for saturn 3060 series
 */
export const links: Link[] = [
  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060', [
    {
      model: 'ichill x3',
      url: 'https://www.saturn.de/de/product/-2718593.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.saturn.de/de/product/-2718594.html',
    },
  ]),
];
