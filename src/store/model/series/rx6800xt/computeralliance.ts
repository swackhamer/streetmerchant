import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for computeralliance rx6800xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix lc',
      url: 'https://www.computeralliance.com.au/asus-rx6800xt-16gb-rog-strix-liquid-cooled-oc-gaming-pcie-video-card',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rx6800xt-16gb-gaming-oc-pcie-video-card-gv-r68xtgaming-oc-16gd',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'gaming x trio',
      url: 'https://www.computeralliance.com.au/msi-rx6800xt-16gb-gaming-x-trio-pcie-video-card',
    },
  ]),
];
