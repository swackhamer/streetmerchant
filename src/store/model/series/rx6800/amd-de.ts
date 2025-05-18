import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-de rx6800 series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800', [
    {
      url: 'https://www.amd.com/de/direct-buy/5458374000/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5458374000/de?add-to-cart=true',
    },
  ]),
];
