import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for asus 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://store.asus.com/us/item/202009AM150000001',
      itemNumber: '202009AM150000001',
    },
    {
      model: 'tuf',
      url: 'https://store.asus.com/us/item/202009AM150000003',
      itemNumber: '202009AM150000003',
    },
    {
      model: 'strix oc',
      url: 'https://store.asus.com/us/item/202012AM220000001',
      itemNumber: '202012AM220000001',
    },
  ]),

];
