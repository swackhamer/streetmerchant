import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy-ca 3070 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3070', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3070-8gb-gddr6-video-card-only-at-best-buy/15078017?intl=nosplash',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3070-ventus-3x-oc-8gb-gddr6x-video-card/15038016?intl=nosplash',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3070-twin-edge-oc-8gb-gddr6x-video-card/15000078?intl=nosplash',
    },
    {
      model: 'twin edge',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3070-twin-edge-8gb-gddr6x-video-card/15000079?intl=nosplash',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 ultra',
      url: 'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3070-xc3-ultra-8gb-gddr6-video-card/15147122?intl=nosplash',
    },
  ]),
];
