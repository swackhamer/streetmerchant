import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for nvidia-es 3090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3090', [
    {
      url: 'https://shop.nvidia.com/es-es/geforce/store/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
  ]),
];
