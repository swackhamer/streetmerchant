import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for ebuyer ryzen9950x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x3d', [
    {
      model: '9950x3d',
      url: 'https://www.ebuyer.com/2491470-amd-ryzen-9-9950x3d-processor-100-100000719wof',
    },
  ]),
];
