import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for globaldata ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.globaldata.pt/processador-amd-ryzen-9-5950x-16-core-34ghz-49ghz-72mb-am4-100-100000059wof',
    },
  ]),
];
