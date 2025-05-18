import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for msi 3080ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'gaming x trio',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=940',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=939',
    },
  ]),
];
