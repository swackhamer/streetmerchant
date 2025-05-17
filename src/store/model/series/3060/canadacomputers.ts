import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for canadacomputers 3060 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'ventus 2x',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=188914&language=en',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189034&language=en',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189035&language=en',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'twin edge oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189411&language=en',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'strix oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189542&language=en',
    },
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189615&language=en',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060', [
    {
      model: 'xc gaming',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189460&language=en',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189625&language=en',
    },
    {
      model: 'eagle oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=189626&language=en',
    },
  ]),

];
