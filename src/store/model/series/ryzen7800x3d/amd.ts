import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amd ryzen7800x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen7800x3d', [
    {
      model: '7800x3d',
      url: 'https://shop-us-en.amd.com/amd-ryzen-7-7800x3d-processor/',
    },
  ]),
];
