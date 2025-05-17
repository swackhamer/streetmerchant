import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for azerty ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://azerty.nl/product/amd/4368018/ryzen-7-5800x-processor-3-8-ghz-4-7-ghz-',
    },
  ]),

];
