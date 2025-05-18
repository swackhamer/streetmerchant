import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for azerty ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://azerty.nl/product/amd/4368016/ryzen-9-5950x-processor-3-4-ghz-4-9-ghz-',
    },
  ]),
];
