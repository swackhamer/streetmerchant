import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for memoryexpress rx6900xt series
 */
export const links: Link[] = [
  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'merc',
      url: 'https://www.memoryexpress.com/Products/MX00115051',
    },
  ]),

];
