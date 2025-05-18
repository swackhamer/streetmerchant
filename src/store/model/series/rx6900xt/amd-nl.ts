import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-nl rx6900xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6900xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458374200/nl',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458374200/nl?add-to-cart=true',
    },
  ]),
];
