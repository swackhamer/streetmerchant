import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for alternate-de rx6800xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'phantom gaming',
      url: 'https://www.alternate.de/html/product/1705279',
    },
    {
      model: 'taichi x oc',
      url: 'https://www.alternate.de/html/product/1704005',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix lc',
      url: 'https://www.alternate.de/html/product/1695392',
    },
    {
      model: 'tuf oc',
      url: 'https://www.alternate.de/html/product/1696417',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'aorus master',
      url: 'https://www.alternate.de/html/product/1705712',
    },
    {
      model: 'aorus master type-c',
      url: 'https://www.alternate.de/html/product/1705710',
    },
    {
      model: 'gaming oc',
      url: 'https://www.alternate.de/html/product/1697044',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'gaming x trio',
      url: 'https://www.alternate.de/html/product/1702969',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'nitro oc',
      url: 'https://www.alternate.de/html/product/1696482',
    },
    {
      model: 'nitro+ oc se',
      url: 'https://www.alternate.de/html/product/1696478',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'merc',
      url: 'https://www.alternate.de/html/product/1698792',
    },
    {
      model: 'merc core',
      url: 'https://www.alternate.de/html/product/1716084',
    },
  ]),
];
