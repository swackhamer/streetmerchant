import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg-ca ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.newegg.ca/amd-ryzen-9-5950x/p/N82E16819113663',
      itemNumber: '19-113-663',
    },
  ]),
];
