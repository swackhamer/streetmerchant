import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for dcomp rx6900xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'gaming oc',
      url: 'https://dcomp.com.au/productdetail/3422',
    },
  ]),
];
