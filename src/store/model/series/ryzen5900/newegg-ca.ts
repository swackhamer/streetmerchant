import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg-ca ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.newegg.ca/amd-ryzen-9-5900x/p/N82E16819113664',
      itemNumber: '19-113-664',
    },
  ]),
];
