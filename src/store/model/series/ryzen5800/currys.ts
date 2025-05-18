import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for currys ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.currys.co.uk/gbuk/computing-accessories/components-upgrades/processors/amd-ryzen-7-5800x-processor-10216690-pdt.html',
    },
  ]),
];
