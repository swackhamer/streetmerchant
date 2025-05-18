import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for ldlc rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.ldlc.com/fiche/PB00412453.html',
    },
  ]),
];
