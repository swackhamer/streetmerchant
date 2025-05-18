import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for argos xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.argos.co.uk/product/8448248',
    },
  ]),
];
