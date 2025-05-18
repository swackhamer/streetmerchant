import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for zotac 4090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '4090', [
    {
      model: 'trinity',
      url: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-4090-trinity',
    },
    {
      model: 'amp extreme airo',
      url: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-4090-amp-extreme-airo',
    },
    {
      model: 'trinity oc',
      url: 'https://www.zotac.com/product/graphics_card/zotac-gaming-geforce-rtx-4090-trinity-oc',
    },
  ]),
];
