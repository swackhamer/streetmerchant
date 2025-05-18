import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for awd ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.awd-it.co.uk/amd-ryzen-9-5900x-cpu-twelve-core-3.7ghz-processor-socket-am4-retail.html',
    },
  ]),
];
