import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for evatech 3090 series
 */
export const links: Link[] = [
  // Colorful Cards
  ...createBrandSeriesLinks('colorful', '3090', [
    {
      model: 'igame advanced oc',
      url: 'https://evatech.com.au/product/6513/colorful-igame-rtx-3090-advance-oc-24g',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://evatech.com.au/product/6524/msi-geforce-rtx-3090-ventus-3x-oc-24gb',
    },
    {
      model: 'gaming x trio',
      url: 'https://evatech.com.au/product/6550/msi-rtx-3090-gaming-x-trio-24gb',
    },
    {
      model: 'suprim x',
      url: 'https://evatech.com.au/product/6573/msi-geforce-rtx-3090-suprim-x-24g',
    },
  ]),
];
