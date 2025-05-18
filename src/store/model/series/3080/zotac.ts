import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for zotac 3080 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-zt-a30800d-10p',
    },
    {
      model: 'trinity oc',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-3080-trinity-oc-zt-a30800j-10p',
    },
    {
      model: 'amp holo',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-amp-holo-zt-a30800f-10p',
    },
  ]),
];
