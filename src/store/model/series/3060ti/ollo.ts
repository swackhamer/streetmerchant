import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for ollo 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.ollo.it/msi-geforce-rtx-3060-ti-ventus-2x-oc/p_810399',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.ollo.it/msi-geforce-rtx-3060-ti-gaming-x-trio/p_810397',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.ollo.it/msi-geforce-rtx-3060-ti-ventus-3x-oc/p_810398',
    },
  ]),
];
