import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for msi 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming trio',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=954',
    },
    {
      model: 'gaming trio',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=1246',
    },
  ]),
];
