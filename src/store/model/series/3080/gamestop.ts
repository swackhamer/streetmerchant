import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for gamestop 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3080-ftw3-ultra-gaming-graphics-card/11121601.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3080-10-gb-gddr6x-strix-graphic-card/11112926.html',
    },
    {
      model: 'tuf',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/tuf-gaming-geforce-rtx-3080-graphics-card/11109446.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3080-10-gb-gddr6x-gaming-x-trio-graphic-card/11118753.html',
    },
  ]),
];
