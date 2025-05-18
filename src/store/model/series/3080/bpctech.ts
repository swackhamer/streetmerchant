import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for bpctech 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.bpctech.com.au/tuf-rtx3080-10g-gaming-asus-geforce-rtx-3080-tuf-gaming-10gb-video-card.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.bpctech.com.au/tuf-rtx3080-o10g-gaming-asus-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.bpctech.com.au/rog-strix-rtx3080-o10g-gaming-asus-geforce-rtx-3080-rog-strix-oc-10gb-video-card.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.bpctech.com.au/10g-p5-3897-kr-evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-video-card.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.bpctech.com.au/10g-p5-3881-kr-evga-geforce-rtx-3080-xc3-black-gaming-10gb-video-card.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.bpctech.com.au/10g-p5-3885-kr-evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-video-card.html',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.bpctech.com.au/38nwm3md99nn-galax-geforce-rtx-3080-sg-1-click-oc-10gb-video-card.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'vision oc',
      url: 'https://www.bpctech.com.au/gv-n3080vision-oc-10gd-gigabyte-geforce-rtx-3080-vision-oc-10gb-video-card.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.bpctech.com.au/gv-n3080gaming-oc-10gd-gigabyte-geforce-rtx-3080-gaming-oc-10gb-video-card.html',
    },
    {
      model: 'aorus master',
      url: 'https://www.bpctech.com.au/gv-n3080aorus-m-10gd-gigabyte-geforce-rtx-3080-aorus-master-10g-video-card.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.bpctech.com.au/gv-n3080aorus-x-10gd-gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-video-card.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.bpctech.com.au/gv-n3080aorusx-w-10gd-gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.bpctech.com.au/gv-n3080eagle-oc-10gd-gigabyte-geforce-rtx-3080-eagle-oc-10gb-video-card.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.bpctech.com.au/c30804-106xx-1810va36-inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card.html',
    },
    {
      model: 'ichill x3',
      url: 'https://www.bpctech.com.au/c30803-106xx-1810va37-inno3d-geforce-rtx-3080-ichill-x3-10gb-video-card.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.bpctech.com.au/n30802-106xx-1810va34-inno3d-geforce-rtx-3080-twin-x2-oc-10gb-video-card.html',
    },
  ]),

  // Leadtek Cards
  ...createBrandSeriesLinks('leadtek', '3080', [
    {
      model: 'hurricane',
      url: 'https://www.bpctech.com.au/rtx3080-hurricane-leadtek-geforce-rtx-3080-hurricane-10gb-video-card.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.bpctech.com.au/rtx3080-suprim-x-10g-msi-geforce-rtx-3080-suprim-x-10gb-video-card.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bpctech.com.au/rtx3080-ventus-3x-10g-oc-msi-rtx-3080-ventus-3x-10g-oc-video-card.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.bpctech.com.au/rtx3080-gaming-x-trio-10g-msi-rtx-3080-gaming-x-trio-10g-video-card.html',
    },
  ]),
];
