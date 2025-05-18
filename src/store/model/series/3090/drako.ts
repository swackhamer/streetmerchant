import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for drako 3090 series
 */
export const links: Link[] = [
  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3090', [
    {
      model: 'sg',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24303',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24303&action=add_product',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'gaming oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24286',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24286&action=add_product',
    },
    {
      model: 'strix oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24722',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24722&action=add_product',
    },
    {
      model: 'strix',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24288',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24288&action=add_product',
    },
    {
      model: 'tuf oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24291',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24291&action=add_product',
    },
    {
      model: 'ekwb',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24680',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24680&action=add_product',
    },
    {
      model: 'tuf',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24290',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24290&action=add_product',
    },
  ]),
];
