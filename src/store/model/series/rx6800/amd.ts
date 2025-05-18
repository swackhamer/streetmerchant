import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd rx6800 series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458373400/us',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458373400/us?add-to-cart=true',
    },
  ]),
];
