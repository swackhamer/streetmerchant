import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for vuugo rx6800 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RX6800-O16G-GAMING.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RX6800-O16G-GAMING.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'gaming oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-R68GAMING-OC-16GD.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'nitro+',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-11305-01-20G.html',
    },
    {
      model: 'pulse',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-11305-02-20G.html',
    },
    {
      model: 'amd reference',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-21305-01-20G.html',
    },
  ]),
];
