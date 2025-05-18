import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for evatech ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://evatech.com.au/product/6557/amd-ryzen-7-5800x-8core-16-thread-base38ghz-boost47ghz-preorder',
    },
  ]),
];
