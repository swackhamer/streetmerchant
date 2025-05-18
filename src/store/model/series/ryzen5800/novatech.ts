import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for novatech ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.novatech.co.uk/products/amd-ryzen-7-5800x-eight-core-processorcpu-without-cooler-/100-000000063wof.html',
    },
  ]),
];
