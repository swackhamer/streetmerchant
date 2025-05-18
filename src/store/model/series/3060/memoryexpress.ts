import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for memoryexpress 3060 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'eagle oc',
      url: 'https://www.memoryexpress.com/Products/MX00116063',
    },
    {
      model: 'vision oc',
      url: 'https://www.memoryexpress.com/Products/MX00116154',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'ventus 2x',
      url: 'https://www.memoryexpress.com/Products/MX00116071',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.memoryexpress.com/Products/MX00116072',
    },
    {
      model: 'gaming x',
      url: 'https://www.memoryexpress.com/Products/MX00116164',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://www.memoryexpress.com/Products/MX00116013',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00116016',
    },
    {
      model: 'tuf oc',
      url: 'https://www.memoryexpress.com/Products/MX00116017',
    },
  ]),
];
