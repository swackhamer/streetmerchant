import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for vsgamers ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.vsgamers.es/product/procesador-amd-ryzen-7-5800x-38-ghz',
    },
  ]),

];
