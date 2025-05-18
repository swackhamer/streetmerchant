import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy-ca 3080ti series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3080ti', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3080-ti-12gb-gddr6x-video-card/15530045?intl=nosplash',
    },
    {
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3080-ti-12gb-gddr6x-video-card/15530045',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'amp holo',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3080-ti-amp-holo-12gb-gddr6x-video-card/15507363',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-nvidia-geforce-rtx-3080-ti-oc-12gb-gddr6x-video-card/15493494',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3080-ti-ventus-3x-oc-12gb-gddr6-video-card/15524483',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3080-ti-gaming-x-trio-12gb-gddr6-video-card/15524484',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3080-ti-ftw3-ultra-12gb-gddr6x-video-card/15524485',
    },
  ]),
];
