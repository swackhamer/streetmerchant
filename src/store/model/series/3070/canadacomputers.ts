import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for canadacomputers 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183099&language=en',
    },
    {
      model: 'vision oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184168&language=en',
    },
    {
      model: 'aorus master',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184167&language=en',
    },
    {
      model: 'eagle oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183100&language=en',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183210&language=en',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183208&language=en',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183209&language=en',
    },
    {
      model: 'suprim x',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186197&language=en',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183636&language=en',
    },
    {
      model: 'strix oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183637&language=en',
    },
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183638&language=en',
    },
    {
      model: 'strix oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186310&language=en',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183561&language=en',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185675&language=en',
    },
    {
      model: 'twin edge',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183560&language=en',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183498&language=en',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183499&language=en',
    },
  ]),
];
