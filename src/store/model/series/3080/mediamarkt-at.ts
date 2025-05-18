import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for mediamarkt-at 3080 series
 */
export const links: Link[] = [
  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phantom gaming',
      url: 'https://www.mediamarkt.at/de/product/-1817678.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.mediamarkt.at/de/product/-1803318.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.mediamarkt.at/de/product/-1799192.html',
    },
  ]),
];
