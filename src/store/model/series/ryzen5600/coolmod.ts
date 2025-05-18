import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for coolmod ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.coolmod.com/amd-ryzen-5-5600x-46ghz-socket-am4-boxed-procesador-precio',
    },
  ]),
];
