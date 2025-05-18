import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for nvidia-gb 5090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('5090', [
    {
      url: 'https://marketplace.nvidia.com/en-gb/consumer/graphics-cards/nvidia-geforce-rtx-5090/',
    },
  ]),
];
