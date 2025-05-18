import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for msi 5090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '5090', [
    {
      model: 'vanguard soc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2472',
    },
    {
      model: 'gaming trio oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2473',
    },
    {
      model: 'suprim liquid soc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2469',
    },
    {
      model: 'suprim oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2470',
    },
    {
      model: 'vanguard soc launch edition',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2471',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2474',
    },
  ]),
];
