import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-de rx6900xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6900xt', [
    {
      url: 'https://www.amd.com/de/direct-buy/5458374200/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5458374200/de?add-to-cart=true',
    },
  ]),
];
