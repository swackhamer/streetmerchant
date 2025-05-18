import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for drako ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'http://www.drako.it/drako_catalog/product_info.php?products_id=24456',
      cartUrl:
        'http://www.drako.it/drako_catalog/product_info.php?products_id=24456&action=add_product',
    },
  ]),
];
