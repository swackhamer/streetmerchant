import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-fr rx6800xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'aorus master',
      url: 'https://www.alternate.fr/html/product/1705712',
    },
  ]),
];
