import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for zotac 3090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3090-trinity-zt-a30900d-10p',
    },
  ]),
];
