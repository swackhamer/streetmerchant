import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for globaldata ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.globaldata.pt/processador-amd-ryzen-5-5600x-6-core-37ghz-46ghz-35mb-am4-100-100000065box',
    },
  ]),

];
