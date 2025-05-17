import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for pcbyte ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-5-5600x-6-core-12-threads-3-7-4-6ghz-am4-cpu-processor-100-100000065box-61099',
    },
  ]),

];
