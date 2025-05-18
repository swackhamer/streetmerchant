import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for mediamarkt-at 3060ti series
 */
export const links: Link[] = [
  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060ti', [
    {
      model: 'phoenix',
      url: 'https://www.mediamarkt.at/de/product/-1815563.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.mediamarkt.at/de/product/-1812392.html',
    },
  ]),
];
