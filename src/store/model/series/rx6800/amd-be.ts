import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-be rx6800 series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458374000/be',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458374000/be?add-to-cart=true',
    },
  ]),
];
