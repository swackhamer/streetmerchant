import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for currys ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-9-5950x-processor-10216688-pdt.html',
    },
  ]),
];
