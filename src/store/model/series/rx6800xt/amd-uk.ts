import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-uk rx6800xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458374100/gb',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458374100/gb?add-to-cart=true',
    },
    {
      url: 'https://www.amd.com/en/direct-buy/5496921500/gb',
      cartUrl: 'https://www.amd.com/en/direct-buy/5496921500/gb?add-to-cart=true',
    },
  ]),
];
