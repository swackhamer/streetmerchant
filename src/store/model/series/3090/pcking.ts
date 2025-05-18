import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for pcking 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140741',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140740',
    },
    {
      model: 'tuf',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15125015',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140739',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus xtreme',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15152168',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140898',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15140899',
    },
    {
      model: 'turbo',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15145820',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'ichill x3',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14796780',
    },
    {
      model: 'ichill x4',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=15121636',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.pcking.de/eshop.php?eslink=1&action=article_detail&s_supplier_id=14&s_supplier_aid=14753078',
    },
  ]),
];
