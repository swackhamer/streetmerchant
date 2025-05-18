import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for asus 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'tuf oc',
      url: 'https://store.asus.com/us/item/202010AM310000002',
      itemNumber: '202010AM310000002',
    },
    {
      model: 'dual',
      url: 'https://store.asus.com/us/item/202011AM240000001',
      itemNumber: '202011AM240000001',
    },
    {
      model: 'dual',
      url: 'https://store.asus.com/us/item/202010AM310000003',
      itemNumber: '202010AM310000003',
    },
    {
      model: 'ko oc',
      url: 'https://store.asus.com/us/item/202011AM070000002',
      itemNumber: '202011AM070000002',
    },
    {
      model: 'dual',
      url: 'https://store.asus.com/us/item/202011AM070000003',
      itemNumber: '202011AM070000003',
    },
    {
      model: 'strix oc',
      url: 'https://store.asus.com/us/item/202101AM070000001',
      itemNumber: '202101AM070000001',
    },
  ]),
];
