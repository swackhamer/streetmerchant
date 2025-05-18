import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for saveonit ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-7-5800x-8-core-3-8ghz-cpu-100-100000063wof',
    },
  ]),
];
