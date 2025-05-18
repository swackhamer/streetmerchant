import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for msi 3050 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3050', [
    {
      model: 'gaming x',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=2140',
    },
    {
      model: 'lp oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=2138',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-30-Series?product_id=2139',
    },
  ]),
];
