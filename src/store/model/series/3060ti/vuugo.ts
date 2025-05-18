import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for vuugo 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-DUAL-RTX3060TI-O8G.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3060TI-O8G-GAMING.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3060TI-O8G-GAMING.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3667-KR.html',
    },
    {
      model: 'xc gaming',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3663-KR.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N306TAORUS-M-8GD.html',
    },
    {
      model: 'eagle',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N306TEAGLE-8GD.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N306TEAGLE-OC-8GD.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N306TGAMING-OC-8GD.html',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N306TGAMINGOC-PRO-8GD.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G306TGXT.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G306TV2XC.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'xlr8 revel',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG3060T8DFXPPB.html',
    },
  ]),
];
