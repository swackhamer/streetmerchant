import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for gamestop 3060ti series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3060-ti-ftw3-ultra-gaming-graphics-card/11121603.html',
    },
  ]),
];
