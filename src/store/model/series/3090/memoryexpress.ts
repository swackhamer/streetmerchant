import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for memoryexpress 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'ekwb',
      url: 'https://www.memoryexpress.com/Products/MX00115135',
    },
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00114093',
    },
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00115133',
    },
    {
      model: 'tuf oc',
      url: 'https://www.memoryexpress.com/Products/MX00114001',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.memoryexpress.com/Products/MX00114315',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00114155',
    },
    {
      model: 'xc3',
      url: 'https://www.memoryexpress.com/Products/MX00114153',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00114154',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.memoryexpress.com/Products/MX00114401',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.memoryexpress.com/Products/MX00114397',
    },
    {
      model: 'eagle',
      url: 'https://www.memoryexpress.com/Products/MX00114686',
    },
    {
      model: 'eagle oc',
      url: 'https://www.memoryexpress.com/Products/MX00113953',
    },
    {
      model: 'gaming oc',
      url: 'https://www.memoryexpress.com/Products/MX00113952',
    },
    {
      model: 'vision oc',
      url: 'https://www.memoryexpress.com/Products/MX00114685',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.memoryexpress.com/Products/MX00113959',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.memoryexpress.com/Products/MX00113958',
    },
    {
      model: 'suprim x',
      url: 'https://www.memoryexpress.com/Products/MX00114908',
    },
  ]),
];
