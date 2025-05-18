import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for evatech ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://evatech.com.au/product/6558/amd-ryzen-9-5900x-12core-24-thread-base37ghz-boost48ghz-preorder',
    },
  ]),
];
