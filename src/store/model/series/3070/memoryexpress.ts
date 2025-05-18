import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for memoryexpress 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual oc',
      url: 'https://www.memoryexpress.com/Products/MX00114566',
    },
    {
      model: 'ko',
      url: 'https://www.memoryexpress.com/Products/MX00114785',
    },
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00114560',
    },
    {
      model: 'tuf oc',
      url: 'https://www.memoryexpress.com/Products/MX00114567',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00114607',
    },
    {
      model: 'xc3 black',
      url: 'https://www.memoryexpress.com/Products/MX00114605',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00114606',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.memoryexpress.com/Products/MX00114688',
    },
    {
      model: 'eagle oc',
      url: 'https://www.memoryexpress.com/Products/MX00114407',
    },
    {
      model: 'gaming oc',
      url: 'https://www.memoryexpress.com/Products/MX00114405',
    },
    {
      model: 'vision oc',
      url: 'https://www.memoryexpress.com/Products/MX00114689',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.memoryexpress.com/Products/MX00114447',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.memoryexpress.com/Products/MX00114448',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.memoryexpress.com/Products/MX00114449',
    },
  ]),
];
