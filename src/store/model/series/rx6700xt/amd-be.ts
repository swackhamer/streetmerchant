import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-be rx6700xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6700xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5496921400/be',
      cartUrl: 'https://www.amd.com/en/direct-buy/5496921400/be?add-to-cart=true',
    },
  ]),
];
