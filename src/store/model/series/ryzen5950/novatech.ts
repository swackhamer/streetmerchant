import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for novatech ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.novatech.co.uk/products/amd-ryzen-9-5950x-sixteen-core-processorcpu-without-cooler-/100-100000059wof.html',
    },
  ]),
];
