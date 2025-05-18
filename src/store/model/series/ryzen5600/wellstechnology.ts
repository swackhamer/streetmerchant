import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for wellstechnology ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-5-5600x-cpu?_pos=1&_sid=3f4c61e03&_ss=r&variant=36941063422118',
    },
  ]),
];
