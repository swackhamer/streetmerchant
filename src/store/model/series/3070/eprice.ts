import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for eprice 3070 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039974',
    },
    {
      model: 'gaming',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039972',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039974',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.eprice.it/schede-video-MSI/d-14039973',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.eprice.it/schede-video-ASUS/d-14042082',
    },
    {
      model: 'strix',
      url: 'https://www.eprice.it/schede-video-ASUS/d-14039878',
    },
    {
      model: 'tuf',
      url: 'https://www.eprice.it/schede-video-ASUS/d-14039876',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'gaming',
      url: 'https://www.eprice.it/schede-video-ZOTAC/d-13979806',
    },
  ]),
];
