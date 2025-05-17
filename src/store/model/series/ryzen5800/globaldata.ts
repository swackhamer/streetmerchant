import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for globaldata ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.globaldata.pt/processador-amd-ryzen-7-5800x-8-core-38ghz-47ghz-36mb-am4-100-100000063wof',
    },
  ]),

];
