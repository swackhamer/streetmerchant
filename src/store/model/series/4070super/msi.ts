import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for msi 4070super series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '4070super', [
    {
      model: 'gaming x slim',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-40-Series?product_id=2055',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-40-Series?product_id=2057',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-40-Series?product_id=2050',
    },
  ]),
];
