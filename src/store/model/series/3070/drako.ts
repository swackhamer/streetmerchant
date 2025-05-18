import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for drako 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24420',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24420&action=add_product',
    },
    {
      model: 'strix',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24422',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24422&action=add_product',
    },
    {
      model: 'tuf',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24721',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24721&action=add_product',
    },
    {
      model: 'tuf oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24421',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24421&action=add_product',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24426',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24426&action=add_product',
    },
    {
      model: 'eagle oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24423',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24423&action=add_product',
    },
    {
      model: 'gaming oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24425',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24425&action=add_product',
    },
    {
      model: 'eagle',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24424',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24424&action=add_product',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3070', [
    {
      model: 'sg',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24475',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24292&action=add_product',
    },
  ]),
];
