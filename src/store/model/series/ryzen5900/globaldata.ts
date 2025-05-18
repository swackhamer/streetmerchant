import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for globaldata ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.globaldata.pt/processador-amd-ryzen-9-5900x-12-core-37ghz-48ghz-70mb-am4-100-100000061wof',
    },
  ]),
];
