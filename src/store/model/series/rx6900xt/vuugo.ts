import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for vuugo rx6900xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asrock-video-cards-RX6900XT-16G.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6900xt', [
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RX6900XT-O16G-GAMING.html',
    },
  ]),
];
