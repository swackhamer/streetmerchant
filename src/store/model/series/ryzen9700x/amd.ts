import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amd ryzen9700x series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9700x', [
    {
      model: '9700x',
      url: 'https://shop-us-en.amd.com/amd-ryzen-7-9700x-processor/',
    },
  ]),

];
