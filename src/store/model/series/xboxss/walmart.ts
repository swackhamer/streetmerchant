import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for walmart xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.walmart.com/ip/Xbox-Series-S/606518560',
    },
  ]),
];
