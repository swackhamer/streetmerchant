import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pcbyte ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-7-5800x-8-core-16-threads-3-8-4-7ghz-am4-cpu-processor-100-100000063wof-61098?search=5800x',
    },
  ]),

];
