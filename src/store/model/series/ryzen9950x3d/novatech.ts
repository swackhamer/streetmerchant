import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for novatech ryzen9950x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x3d', [
    {
      model: '9950x3d',
      url: 'https://www.novatech.co.uk/products/amd-ryzen-9-9950x3d-16-core-am5-processor-cpu/100-100000719wof.html',
    },
  ]),
];
