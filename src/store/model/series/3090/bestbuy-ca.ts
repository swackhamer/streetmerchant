import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bestbuy-ca 3090 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3090', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3090-24gb-gddr6x-video-card/15463568?intl=nosplash',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3090-trinity-24gb-gddr6x-video-card/14953250?intl=nosplash',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-3090-24gb-gddr6x-video-card/14953247?intl=nosplash',
    },
    {
      model: 'strix',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-video-card/14954117?intl=nosplash',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3090-ventus-3x-oc-24gb-gddr6x-video-card/14966477?intl=nosplash',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'xc3 ultra',
      url: 'https://www.bestbuy.ca/en-ca/product/evga-nvidia-geforce-rtx-3090-xc3-ultra-gaming-24gb-gddr6x-video-card/14967857?intl=nosplash',
    },
  ]),
];
