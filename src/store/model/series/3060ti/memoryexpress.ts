import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for memoryexpress 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.memoryexpress.com/Products/MX00114969',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.memoryexpress.com/Products/MX00114970',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual oc',
      url: 'https://www.memoryexpress.com/Products/MX00114818',
    },
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00114786',
    },
    {
      model: 'tuf oc',
      url: 'https://www.memoryexpress.com/Products/MX00114819',
    },
    {
      model: 'ko',
      url: 'https://www.memoryexpress.com/Products/MX00114888',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.memoryexpress.com/Products/MX00114923',
    },
    {
      model: 'eagle',
      url: 'https://www.memoryexpress.com/Products/MX00114927',
    },
    {
      model: 'eagle oc',
      url: 'https://www.memoryexpress.com/Products/MX00114926',
    },
    {
      model: 'gaming oc',
      url: 'https://www.memoryexpress.com/Products/MX00114925',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.memoryexpress.com/Products/MX00114924',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00115013',
    },
    {
      model: 'xc gaming',
      url: 'https://www.memoryexpress.com/Products/MX00115014',
    },
  ]),
];
