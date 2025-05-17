import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for zotac 4080-16g series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '4080-16g', [
    {
      model: 'amp extreme airo',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-4080-16gb-amp-extreme-airo',
    },
    {
      model: 'trinity',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-4080-16gb-trinity',
    },
  ]),

];
