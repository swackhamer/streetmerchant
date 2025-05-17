import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for galaxus ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.galaxus.de/de/product/13987916',
    },
    {
      model: '5950x',
      url: 'https://www.galaxus.de/de/product/13987916',
    },
  ]),

];
