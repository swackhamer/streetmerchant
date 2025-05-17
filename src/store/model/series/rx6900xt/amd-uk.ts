import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for amd-uk rx6900xt series
 */
export const links: Link[] = [
  // AMD Reference
  ...createAmdReferenceLinks('rx6900xt', [
    {
      url: 'https://www.amd.com/en/direct-buy/5458374200/gb',
      cartUrl: 'https://www.amd.com/en/direct-buy/5458374200/gb?add-to-cart=true',
    },
  ]),

];
