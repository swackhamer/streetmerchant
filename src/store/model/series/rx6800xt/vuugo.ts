import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for vuugo rx6800xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix lc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-LC-RX6800XT-O16G-GAMING.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RX6800XT-O16G-GAMING.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-R68XTGAMING-OC-16GD.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-R6800GXT16.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-R6800XTGXT16.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'nitro+',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-11304-02-20G.html',
    },
    {
      model: 'nitro+ se',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-11304-01-20G.html',
    },
    {
      model: 'pulse',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-11304-03-20G.html',
    },
    {
      model: 'amd reference',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/sapphire-video-cards-21304-01-20G.html',
    },
  ]),

];
