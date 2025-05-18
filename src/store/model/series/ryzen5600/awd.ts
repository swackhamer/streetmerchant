import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for awd ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.awd-it.co.uk/amd-ryzen-5-5600x-cpu-six-core-3.7ghz-processor-socket-am4-retail.html',
    },
  ]),
];
