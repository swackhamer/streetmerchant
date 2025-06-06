import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for vsgamers ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.vsgamers.es/product/procesador-amd-ryzen-5-5600x-37-ghz',
    },
  ]),
];
