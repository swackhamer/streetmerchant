import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for asus 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://store.asus.com/us/item/202009AM290000002',
      itemNumber: '202009AM290000002',
    },
    {
      model: 'tuf oc',
      url: 'https://store.asus.com/us/item/202009AM160000001',
      itemNumber: '202009AM160000001',
    },
    {
      model: 'strix oc',
      url: 'https://store.asus.com/us/item/202012AM220000002',
      itemNumber: '202012AM220000002',
    },
    {
      model: 'tuf',
      url: 'https://store.asus.com/us/item/202009AM150000004',
      itemNumber: '202009AM150000004',
    },
    {
      model: 'ekwb',
      url: 'https://store.asus.com/us/item/202101AM070000002',
      itemNumber: '202101AM070000002',
    },
  ]),
];
