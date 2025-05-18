import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for nvidia-gb 3080ti series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3080ti', [
    {
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203080%20Ti&manufacturer=NVIDIA',
    },
  ]),
];
