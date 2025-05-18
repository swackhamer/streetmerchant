import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for currys ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-5-5600x-processor-10216691-pdt.html',
    },
  ]),
];
