import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for canadacomputers rx6800xt series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=186526&language=en',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'nitro+',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185754&language=en',
    },
    {
      model: 'nitro+ se',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185753&language=en',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185891&language=en',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix lc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_558&item_id=185458&language=en',
    },
  ]),
];
