import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for saturn xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.saturn.de/de/product/-2677359.html',
    },
  ]),
];
