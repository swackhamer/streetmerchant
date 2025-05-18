import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for vuugo 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3080-O10G-GAMING.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3080-O10G-WH.html',
    },
    {
      model: 'tuf',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3080-10G-GAMING.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3080-O10G-GAMING.html',
    },
    {
      model: 'ekwb',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-RTX3080-10G-EK.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-10G-P5-3895-KR.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-10G-P5-3897-KR.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-10G-P5-3881-KR.html',
    },
    {
      model: 'xc3',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-10G-P5-3883-KR.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-10G-P5-3885-KR.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3080AORUS-M-10GD.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3080AORUS-X-10GD.html',
    },
    {
      model: 'eagle',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3080EAGLE-10GD.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3080EAGLE-OC-10GD.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3080GAMING-OC-10GD.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3080VISION-OC-10GD.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3080GXT10.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3080V3X10C.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 uprising',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG308010TFXMPB.html',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG308010TFXPPB.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/zotac-video-cards-ZT-A30800J-10P.html',
    },
    {
      model: 'trinity',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/zotac-video-cards-ZT-A30800D-10P.html',
    },
  ]),
];
