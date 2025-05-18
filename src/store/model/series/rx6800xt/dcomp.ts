import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for dcomp rx6800xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://dcomp.com.au/productdetail/3421',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'gaming x trio',
      url: 'https://dcomp.com.au/productdetail/3387',
    },
  ]),
];
