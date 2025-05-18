import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for wellstechnology ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-9-5950x-cpu?_pos=1&_sid=cc7b6903f&_ss=r&variant=37019002339494',
    },
    {
      model: '5900x',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-5-5900x-cpu?_pos=1&_sid=b9234b72d&_ss=r&variant=36941124337830',
    },
  ]),
];
