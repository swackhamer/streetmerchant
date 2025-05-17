import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for saveonit ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.saveonit.com.au/product/amd-ryzen-9-5950x-16-core-3-4-ghz-cpu-100-100000059wof',
    },
  ]),

];
