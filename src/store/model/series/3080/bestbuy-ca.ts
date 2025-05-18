import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy-ca 3080 series
 */
export const links: Link[] = [
  // NVIDIA Founders Edition
  ...createFoundersEditionLinks('3080', [
    {
      url: 'https://www.bestbuy.ca/en-ca/product/nvidia-geforce-rtx-3080-10gb-gddr6x-video-card/15463567?intl=nosplash',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-geforce-rtx-3080-trinity-10gb-gddr6x-video-card/14953249?intl=nosplash',
    },
    {
      model: 'trinity oc',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3080-trinity-oc-10gb-gddr6x-video-card/15000077?intl=nosplash',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x',
      url: 'https://www.bestbuy.ca/en-ca/product/msi-nvidia-geforce-rtx-3080-ventus-3x-10gb-gddr6x-video-card/14950588?intl=nosplash',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 ultra',
      url: 'https://www.bestbuy.ca/en-ca/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x-video-card/15084753?intl=nosplash',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-tuf-gaming-geforce-rtx-3080-10gb-gddr6x-video-card/14953248?intl=nosplash',
    },
    {
      model: 'strix',
      url: 'https://www.bestbuy.ca/en-ca/product/asus-rog-strix-geforce-rtx-3080-10gb-gddr6x-video-card/14954116?intl=nosplash',
    },
  ]),
];
