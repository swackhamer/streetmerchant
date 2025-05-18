import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-nl rx6800xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458374100/nl',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458374100/nl?add-to-cart=true',
    },
  ]),
];
