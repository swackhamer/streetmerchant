import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bestbuy-ca 3060 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'ventus 3x',
      url: 'https://www.bestbuy.ca/en-ca/product/16595219',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'twin edge oc',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3060-twin-edge-oc-12gb-gddr6-video-card/15309503',
    },
    {
      model: 'twin edge',
      url: 'https://www.bestbuy.ca/en-ca/product/zotac-nvidia-geforce-rtx-3060-twin-edge-12gb-gddr6-video-card/15309504',
    },
  ]),
];
