import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for walmart-ca sf series
 */
export const links: Link[] = [
  // Corsair Cards
  ...createBrandSeriesLinks('corsair', 'sf', [
    {
      model: '600 platinum',
      url: 'https://www.walmart.ca/en/ip/Corsair-SF-Series-SF600-600-Watt-80-PLUS-Gold-Certified-High-Performance-SFX-PSU/PRD6VH8WNKHD36Q',
    },
  ]),

];
