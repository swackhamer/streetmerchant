import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for comet xboxsx series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxsx', [
    {
      model: 'xbox series x',
      url: 'https://www.comet.it/xbox-serie-x/xbox-series-x',
      cartUrl: 'https://www.comet.it/cart/insert/MIS01077A/online',
    },
  ]),
];
