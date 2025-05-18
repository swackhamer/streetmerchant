import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for zotac 3060ti series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-zt-a30610e-10m',
    },
    {
      model: 'twin edge oc',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-zt-a30610h-10m',
    },
  ]),
];
