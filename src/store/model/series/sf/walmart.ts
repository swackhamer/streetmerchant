import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for walmart sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '750 platinum',
      url: 'https://www.walmart.com/ip/SF750-Power-Supply/197046151',
    },
    {
      model: '600 platinum',
      url: 'https://www.walmart.com/ip/Corsair-SF-Series-600W-80-Platinum-Power-Supply/250717047',
    },
  ]),
];
