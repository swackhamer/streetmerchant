import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for gamestop-de sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.gamestop.de/PS5/Games/60315',
    },
  ]),

];
