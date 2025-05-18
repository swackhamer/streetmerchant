import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for awd ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.awd-it.co.uk/amd-ryzen-7-5800x-cpu-eight-core-3.8ghz-processor-socket-am4-retail.html',
    },
  ]),
];
