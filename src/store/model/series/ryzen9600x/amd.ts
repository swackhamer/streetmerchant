import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for amd ryzen9600x series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9600x', [
    {
      model: '9600x',
      url: 'https://shop-us-en.amd.com/amd-ryzen-5-9600x-processor/',
    },
  ]),
];
