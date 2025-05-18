import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for amd ryzen9800x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9800x3d', [
    {
      model: '9800x3d',
      url: 'https://shop-us-en.amd.com/amd-ryzen-7-9800x3d-processor/',
    },
  ]),
];
