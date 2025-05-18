import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for msi 4060 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '4060', [
    {
      model: 'ventus 2x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-40-Series?product_id=1799',
    },
    {
      model: 'ventus 2x white oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-40-Series?product_id=1852',
    },
  ]),
];
