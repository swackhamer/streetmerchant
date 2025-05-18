import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for alternate-de ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.alternate.de/html/product/1685584',
    },
  ]),
];
