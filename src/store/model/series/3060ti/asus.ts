import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for asus 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://store.asus.com/us/item/202012AM030000004',
      itemNumber: '202012AM030000004',
    },
    {
      model: 'dual',
      url: 'https://store.asus.com/us/item/202012AM030000003',
      itemNumber: '202012AM030000003',
    },
    {
      model: 'strix oc',
      url: 'https://store.asus.com/us/item/202012AM030000005',
      itemNumber: '202012AM030000005',
    },
    {
      model: 'ko',
      url: 'https://store.asus.com/us/item/202012AM030000002',
      itemNumber: '202012AM030000002',
    },
  ]),
];
