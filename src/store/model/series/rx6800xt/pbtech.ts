import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for pbtech rx6800xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'taichi',
      url: 'https://www.pbtech.com/au/product/VGAASR06810/ASRock-Radeon-RX-6800-XT-Taichi-X-OC-Graphics-Card',
    },
  ]),
];
