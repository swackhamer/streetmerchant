import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for novatech ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.novatech.co.uk/products/amd-ryzen-9-5900x-twelve-core-processorcpu-without-cooler-/100-100000061wof.html',
    },
  ]),

];
