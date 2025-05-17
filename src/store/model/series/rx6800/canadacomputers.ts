import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for canadacomputers rx6800 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186527&language=en',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'nitro+',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185755&language=en',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'strix oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185459&language=en',
    },
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185460&language=en',
    },
  ]),

];
