import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for comet xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.comet.it/xbox-serie-x/xbox-series-s',
      cartUrl: 'https://www.comet.it/cart/insert/MIS010761/online',
    },
  ]),
];
