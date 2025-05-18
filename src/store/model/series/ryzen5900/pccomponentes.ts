import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for pccomponentes ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.pccomponentes.com/amd-ryzen-9-5900x-37-ghz',
    },
  ]),
];
