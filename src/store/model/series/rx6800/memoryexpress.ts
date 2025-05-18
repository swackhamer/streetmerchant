import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for memoryexpress rx6800 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00114938',
    },
    {
      model: 'tuf oc',
      url: 'https://www.memoryexpress.com/Products/MX00114937',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://www.memoryexpress.com/Products/MX00115049',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'nitro+',
      url: 'https://www.memoryexpress.com/Products/MX00115123',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800', [
    {
      model: 'merc',
      url: 'https://www.memoryexpress.com/Products/MX00114997',
    },
  ]),
];
