import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amd ryzen9950x series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x', [
    {
      model: '9950x',
      url: 'https://shop-us-en.amd.com/amd-ryzen-9-9950x-processor/',
    },
  ]),

];
