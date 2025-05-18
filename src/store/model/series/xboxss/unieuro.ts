import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for unieuro xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.unieuro.it/online/Xbox-Series/Xbox-Series-S-pidDBLRRS00008',
    },
  ]),
];
