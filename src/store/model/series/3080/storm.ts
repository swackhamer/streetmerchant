import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for storm 3080 series
 */
export const links: Link[] = [
  // Colorful Cards
  ...createBrandSeriesLinks('colorful', '3080', [
    {
      model: 'igame ultra oc',
      url: 'https://www.stormcomputers.com.au/product/colorful-igame-rtx-3080-ultra/',
    },
    {
      model: 'igame advanced oc',
      url: 'https://www.stormcomputers.com.au/product/colorful-igame-geforce-igame-rtx-3080-advanced-10gb-graphics-card/',
    },
    {
      model: 'igame vulcan oc',
      url: 'https://www.stormcomputers.com.au/product/igame-geforce-rtx-3080-vulcan-oc-10g-v/',
    },
  ]),
];
