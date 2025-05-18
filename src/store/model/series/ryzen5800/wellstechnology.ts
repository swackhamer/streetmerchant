import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for wellstechnology ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://wellstechnology.com.au/products/amd-ryzen-5-5800x-cpu?_pos=1&_sid=35b306d65&_ss=r&variant=36941094387878',
    },
  ]),
];
