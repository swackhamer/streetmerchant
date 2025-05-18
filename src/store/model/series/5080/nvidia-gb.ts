import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for nvidia-gb 5080 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5080', [
    {
      url: 'https://marketplace.nvidia.com/en-gb/consumer/graphics-cards/nvidia-geforce-rtx-5080/',
    },
  ]),
];
