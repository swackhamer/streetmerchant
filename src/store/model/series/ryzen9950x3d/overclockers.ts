import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for overclockers ryzen9950x3d series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen9950x3d', [
    {
      model: '9950x3d',
      url: 'https://www.overclockers.co.uk/amd-ryzen-9-9950x3d-sixteen-core-5.70ghz-socket-am5-processor-retail-pro-amd-04501.html',
    },
  ]),
];
