import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for azerty ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://azerty.nl/product/amd/4368017/ryzen-9-5900x-processor-3-7-ghz-4-8-ghz-',
    },
  ]),

];
