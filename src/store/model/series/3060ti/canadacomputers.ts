import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for canadacomputers 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185086&language=en',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185087&language=en',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184759&language=en',
    },
    {
      model: 'dual oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184760&language=en',
    },
    {
      model: 'strix oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=184431&language=en',
    },
    {
      model: 'ko',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185168&language=en',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185751&language=en',
    },
    {
      model: 'twin edge',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185752&language=en',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'xc gaming',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185988&language=en',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185987&language=en',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185408&language=en',
    },
    {
      model: 'gaming oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185407&language=en',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185406&language=en',
    },
    {
      model: 'aorus master',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=185405&language=en',
    },
  ]),
];
