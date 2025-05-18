import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for memoryexpress rx6800xt series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'pulse',
      url: 'https://www.memoryexpress.com/Products/MX00115124',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://www.memoryexpress.com/Products/MX00115048',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'merc',
      url: 'https://www.memoryexpress.com/Products/MX00114996',
    },
  ]),
];
