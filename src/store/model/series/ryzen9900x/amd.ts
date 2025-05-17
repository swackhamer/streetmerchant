import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amd ryzen9900x series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9900x', [
    {
      model: '9900x',
      url: 'https://shop-us-en.amd.com/amd-ryzen-9-9900x-processor/',
    },
  ]),

];
