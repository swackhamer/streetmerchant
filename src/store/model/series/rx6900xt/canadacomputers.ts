import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for canadacomputers rx6900xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6900xt', [
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186610&language=en',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'nitro+',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186614&language=en',
    },
  ]),

];
