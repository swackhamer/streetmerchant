import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-fr rx6900xt series
 */
export const links: Link[] = [
  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'merc',
      url: 'https://www.alternate.fr/html/product/1759745',
    },
    {
      model: 'merc',
      url: 'https://www.alternate.fr/html/product/1713052',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'gaming trio',
      url: 'https://www.alternate.fr/html/product/1751166',
    },
  ]),
];
