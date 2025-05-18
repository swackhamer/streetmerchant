import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for vuugo 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-DUAL-RTX3070-8G.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-DUAL-RTX3070-O8G.html',
    },
    {
      model: 'ko',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-KO-RTX3070-O8G-GAMING.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3070-O8G-GAMING.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3070-O8G-WH.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3070-O8G-GAMING.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3765-KR.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3767-KR.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3751-KR.html',
    },
    {
      model: 'xc3',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3753-KR.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-08G-P5-3755-KR.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'aorus master',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3070AORUS%20M-8GD.html',
    },
    {
      model: 'eagle',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3070EAGLE-8GD.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3070EAGLE-OC-8GD.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3070GAMING-OC-8GD.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3070VISION-OC-8GD.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3070GXT.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3070SX8.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3070V2XC.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3070V3XC.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'xlr8 revel',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG30708TFXPPB.html',
    },
    {
      model: 'dual fan',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG30708DFMPB.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/zotac-video-cards-ZT-A30700H-10P.html',
    },
    {
      model: 'twin edge',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/zotac-video-cards-ZT-A30700E-10P.html',
    },
  ]),
];
