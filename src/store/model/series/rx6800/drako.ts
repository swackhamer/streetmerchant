import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for drako rx6800 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'strix',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24604',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24604&action=add_product',
    },
    {
      model: 'tuf',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24605',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24605&action=add_product',
    },
    {
      model: 'tuf oc',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24606',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24606&action=add_product',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'amd reference',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24606',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24606&action=add_product',
    },
  ]),
];
