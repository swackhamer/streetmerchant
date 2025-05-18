import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for zotac 5090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5090', [
    {
      model: 'solid',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5090-solid',
    },
    {
      model: 'solid oc',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5090-solid-oc',
    },
    {
      model: 'amp extreme infinity',
      url: 'https://www.zotac.com/us/product/graphics_card/zotac-gaming-geforce-rtx-5090-amp-extreme-infinity',
    },
  ]),
];
