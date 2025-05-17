import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for azerty ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://azerty.nl/product/amd/4368019/ryzen-5-5600x-processor-3-7-ghz-4-6-ghz-',
    },
  ]),

];
