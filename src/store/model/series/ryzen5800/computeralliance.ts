import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for computeralliance ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.computeralliance.com.au/amd-am4-ryzen-7-5800x-8-core-4.7ghz-cpu-(no-heatsink)-100-100000063wof',
    },
  ]),
];
