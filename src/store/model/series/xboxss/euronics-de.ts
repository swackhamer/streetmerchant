import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for euronics-de xboxss series
 */
export const links: Link[] = [
  // Microsoft Cards
  ...createBrandSeriesLinks('microsoft', 'xboxss', [
    {
      model: 'xbox series s',
      url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/xbox-series-x/spielekonsole/xbox-series-s-512gb-konsole-4061856838076',
    },
  ]),
];
