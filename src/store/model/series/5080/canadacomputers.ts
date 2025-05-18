import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for canadacomputers 5080 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5080', [
    {
      model: 'solid',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268152&language=en',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5080', [
    {
      model: 'windforce oc',
      url: 'https://www.canadacomputers.com/product_info.php?cPath=43_557_559&item_id=268141&language=en',
    },
  ]),
];
