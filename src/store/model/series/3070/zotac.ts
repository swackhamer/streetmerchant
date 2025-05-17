import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for zotac 3070 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3070-twin-edge-zt-a30700e-10p',
    },
    {
      model: 'twin edge oc',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3070-twin-edge-oc-zt-a30700h-10p',
    },
  ]),

];
