import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for mindfactory 3090 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.mindfactory.de/product_info.php/24GB-Gigabyte-GeForce-3090-Gaming-OC--Retail-_1377265.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x',
      url: 'https://www.mindfactory.de/product_info.php/24GB-MSI-GeForce-RTX-3090-VENTUS-3X-DDR6--Retail-_1377475.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gaming pro',
      url: 'https://www.mindfactory.de/product_info.php/24GB-Palit-GeForce-RTX-3090-GamingPro-DDR6--Retail-_1377233.html',
    },
  ]),
];
