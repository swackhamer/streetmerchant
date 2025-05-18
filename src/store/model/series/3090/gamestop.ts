import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for gamestop 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'suprim x',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-24-gb-gddr6x-suprim-x-graphic-card/11118698.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-24-gb-gddr6x-gaming-x-trio-graphic-card/11118752.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-24gb-gddr6x-pci-express-4.0-strix-graphics-card/11112502.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.gamestop.com/video-games/pc-gaming/components/graphics-cards/products/geforce-rtx-3090-ftw3-ultra-gaming-graphics-card/11121600.html',
    },
  ]),
];
