import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for overclockers ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.overclockers.co.uk/amd-ryzen-9-5950x-sixteen-core-4.9ghz-socket-am4-processor-retail-cp-3c9-am.html',
    },
  ]),

];
