import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for ccl ryzen9950x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x3d', [
    {
      model: '9950x3d',
      url: 'https://www.cclonline.com/100-100000719wof-amd-ryzen-9-9950x3d-16-core-32-thread-am5-cpu-483923/',
    },
  ]),
];
