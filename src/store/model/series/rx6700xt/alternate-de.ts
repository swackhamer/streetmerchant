import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-de rx6700xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6700xt', [
    {
      model: 'challenger',
      url: 'https://www.alternate.de/html/product/1757933',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6700xt', [
    {
      model: 'merc',
      url: 'https://www.alternate.de/html/product/1730305',
    },
  ]),
];
