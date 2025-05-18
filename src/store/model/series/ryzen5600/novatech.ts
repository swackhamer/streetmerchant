import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for novatech ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.novatech.co.uk/products/amd-ryzen-5-5600x-six-core-processorcpu-with-stealth-cooler-/100-000000065box.html',
    },
  ]),
];
