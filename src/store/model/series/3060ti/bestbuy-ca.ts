import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bestbuy-ca 3060ti series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3060ti', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3060-ti-8gb-gddr6-video-card/15166285?intl=nosplash',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3060-ti-ventus-2x-oc-8gb-gddr6-video-card/15178453?intl=nosplash',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.bestbuy.ca/en-ca/product/evga-nvidia-geforce-rtx-3060-ti-ftw3-ultra-8gb-gddr6-video-card/15229237',
    },
  ]),
];
