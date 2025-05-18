import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-ca rx6900xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6900xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458372200/ca',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458372200/ca?add-to-cart=true',
    },
  ]),
];
