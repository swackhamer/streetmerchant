import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for nvidia-gb 3070ti series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3070ti', [
    {
      url: 'https://shop.nvidia.com/en-gb/geforce/store/gpu/?page=1&limit=9&locale=en-gb&category=GPU&gpu=RTX%203070%20Ti&manufacturer=NVIDIA',
    },
  ]),
];
