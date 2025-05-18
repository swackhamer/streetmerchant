import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for storm 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix oc',
      url: 'https://www.stormcomputers.com.au/product/asus-geforce-rtx3090-rog-strix-gaming-oc-24gb-gddr6x-rog-strix-rtx3090-o24g-gaming/',
    },
  ]),

  // Colorful Cards
  ...createBrandSeriesLinks('colorful', '3090', [
    {
      model: 'battle-ax',
      url: 'https://www.stormcomputers.com.au/product/colorful-geforce-rtx-3090-nb/',
    },
    {
      model: 'igame advanced oc',
      url: 'https://www.stormcomputers.com.au/product/colorful-igame-geforce-rtx-3090-advanced-oc/',
    },
  ]),
];
