import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for asus darkhero series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'darkhero', [
    {
      model: 'crosshair viii',
      url: 'https://store.asus.com/us/item/202011AM200000003',
      itemNumber: '202011AM200000003',
    },
  ]),
];
