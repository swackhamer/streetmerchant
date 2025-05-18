import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for alternate-de xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.alternate.de/html/product/1675117',
    },
  ]),
];
