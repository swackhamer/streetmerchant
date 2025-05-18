import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for zotac 5080 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5080', [
    {
      model: 'solid',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5080-solid',
    },
    {
      model: 'solid oc',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5080-solid-oc',
    },
    {
      model: 'amp extreme infinity',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5080-amp-extreme-infinity',
    },
  ]),
];
