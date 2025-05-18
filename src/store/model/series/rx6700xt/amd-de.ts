import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-de rx6700xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6700xt', [
    {
      url: 'https://www.amd.com/de/direct-buy/5496921400/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5496921400/de?add-to-cart=true',
    },
  ]),
];
