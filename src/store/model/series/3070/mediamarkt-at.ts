import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for mediamarkt-at 3070 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x',
      url: 'https://www.mediamarkt.at/de/product/-1812232.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.mediamarkt.at/de/product/-1812223.html',
    },
  ]),
];
