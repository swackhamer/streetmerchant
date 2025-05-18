import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for box rx6900xt series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'rx6900xt', [
    {
      model: 'tuf oc',
      url: 'https://www.box.co.uk/90YV0GE0-M0NM00-ASUS-Radeon-RX-X6900XT-16GB-OC-Gaming-Gr_3561243.html',
    },
  ]),
];
