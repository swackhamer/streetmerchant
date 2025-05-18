import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for dcomp rx6800 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://dcomp.com.au/productdetail/3358',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://dcomp.com.au/productdetail/3386',
    },
  ]),
];
