import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-de rx6800 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1697045',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.de/html/product/1702966',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'nitro+ oc',
      url: 'https://www.alternate.de/html/product/1696483',
    },
    {
      model: 'pulse oc',
      url: 'https://www.alternate.de/html/product/1702008',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800', [
    {
      model: 'merc',
      url: 'https://www.alternate.de/html/product/1698793',
    },
    {
      model: 'qick',
      url: 'https://www.alternate.de/html/product/1716091',
    },
  ]),
];
