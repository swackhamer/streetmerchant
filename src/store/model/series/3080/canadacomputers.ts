import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for canadacomputers 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181376&language=en',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181842&language=en',
    },
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181415&language=en',
    },
    {
      model: 'strix',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186309&language=en',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=181348&language=en',
    },
    {
      model: 'suprim x',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185084&language=en',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184837&language=en',
    },
    {
      model: 'trinity oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183510&language=en',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=182754&language=en',
    },
    {
      model: 'vision oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=182755&language=en',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=183098&language=en',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186345&language=en',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=186344&language=en',
    },
  ]),
];
