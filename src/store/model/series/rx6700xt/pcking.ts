import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pcking rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15952540',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15930630',
    },
    {
      model: 'strix oc',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15930631',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15673300',
    },
    {
      model: 'eagle',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15673299',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'mech 2x',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15971204',
    },
    {
      model: 'mech 2x oc',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15947815',
    },
    {
      model: 'gaming x',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15947814',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6700xt', [
    {
      model: 'hellhound white',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=16349358',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'pulse',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15919795',
    },
    {
      model: 'nitro+',
      url: 'https://www.pcking.de/eshop.php?action=article_detail&s_supplier_aid=15938177',
    },
  ]),
];
