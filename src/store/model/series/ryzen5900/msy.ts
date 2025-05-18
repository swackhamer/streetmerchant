import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for msy ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.msy.com.au/amd-ryzen-9-5900x-100-100000061wof-up-to-48ghz-base-clock-37ghzam412-cores24-threads64mb105w-unlocked-boxed-cpu-without-cpu-cooler',
    },
  ]),
];
