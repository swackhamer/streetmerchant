import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for msi 5080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '5080', [
    {
      model: 'gaming trio oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2480',
    },
    {
      model: 'gaming trio oc white',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2479',
    },
    {
      model: 'inspire 3x',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2481',
    },
    {
      model: 'shadow 3x',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2485',
    },
    {
      model: 'suprim liquid soc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2475',
    },
    {
      model: 'suprim soc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2476',
    },
    {
      model: 'vanguard soc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2478',
    },
    {
      model: 'vanguard soc launch edition',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2477',
    },
    {
      model: 'ventus 3x',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2487',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2482',
    },
    {
      model: 'ventus 3x oc plus',
      url: 'https://us-store.msi.com/Graphics-Cards/NVIDIA-GPU/GeForce-RTX-50-Series?product_id=2483',
    },
  ]),
];
