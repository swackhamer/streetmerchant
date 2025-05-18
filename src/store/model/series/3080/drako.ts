import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for drako 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'ekwb',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24666',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24666&action=add_product',
    },
    {
      model: 'strix oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24289',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24289&action=add_product',
    },
    {
      model: 'strix white',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24723',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24723&action=add_product',
    },
    {
      model: 'strix',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24287',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24287&action=add_product',
    },
    {
      model: 'tuf oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24293',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24293&action=add_product',
    },
    {
      model: 'tuf',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24292',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24292&action=add_product',
    },
  ]),
];
