import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for vuugo 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3090-O24G-GA.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-ROG-STRIX-RTX3090-O24G-WH.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3090-O24G-GAMING.html',
    },
    {
      model: 'tuf',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-TUF-RTX3090-24G-GAMING.html',
    },
    {
      model: 'ekwb',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/asus-video-cards-RTX3090-24G-EK.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3985-KR.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3987-KR.html',
    },
    {
      model: 'xc3',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3973-KR.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/evga-video-cards-24G-P5-3975-KR.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090AORUS-M-24GD.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090AORUS-X-24GD.html',
    },
    {
      model: 'eagle',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090EAGLE-24GD.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090EAGLE-OC-24GD.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090GAMING-OC-24GD.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/gigabyte-video-cards-GV-N3090VISION-OC-24GD.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3090GXT24.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/msi-video-cards-G3090V3X24C.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 revel',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG309024TFXPPB.html',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/pny-video-cards-VCG309024TFXMPB.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.vuugo.com/computer-hardware/computer-parts/video-cards/zotac-video-cards-ZT-A30900D-10P.html',
    },
  ]),

];
