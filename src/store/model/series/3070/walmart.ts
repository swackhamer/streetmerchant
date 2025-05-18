import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for walmart 3070 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.walmart.com/ip/804934537',
    },
  ]),
];
