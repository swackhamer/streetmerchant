import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-de rx6800xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800xt', [
    {
      url: 'https://www.amd.com/de/direct-buy/5458374100/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5458374100/de?add-to-cart=true',
    },
    {
      url: 'https://www.amd.com/de/direct-buy/5496921500/de',
      cartUrl: 'https://www.amd.com/de/direct-buy/5496921500/de?add-to-cart=true',
    },
  ]),
];
