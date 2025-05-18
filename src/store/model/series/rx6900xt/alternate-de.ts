import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-de rx6900xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6900xt', [
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1702773',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'aorus master',
      url: 'https://www.alternate.de/html/product/1723388',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1713711',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.alternate.de/html/product/1700508',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.de/html/product/1712555',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'nitro+ oc',
      url: 'https://www.alternate.de/html/product/1704994',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'merc',
      url: 'https://www.alternate.de/html/product/1713052',
    },
    {
      model: 'merc ultra',
      url: 'https://www.alternate.de/html/product/1704614',
    },
  ]),
];
