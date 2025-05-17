import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-ca rx6800xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6800xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458372800/ca',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458372800/ca?add-to-cart=true',
    },
    {
      url: 'https://www.amd.com/en/direct-buy/5496921500/ca',
      cartUrl: 'https://www.amd.com/en/direct-buy/5496921500/ca?add-to-cart=true',
    },
  ]),

];
