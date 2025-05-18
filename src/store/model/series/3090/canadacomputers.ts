import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for canadacomputers 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181841&language=en',
    },
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181413&language=en',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181854&language=en',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181853&language=en',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181419&language=en',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181351&language=en',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183096&language=en',
    },
    {
      model: 'eagle oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181352&language=en',
    },
    {
      model: 'aorus master',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183097&language=en',
    },
    {
      model: 'vision oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184164&language=en',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181350&language=en',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181349&language=en',
    },
  ]),
];
