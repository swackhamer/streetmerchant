import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for cpl 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-rog-strix-rtx3080-10g-gaming-graphics-card.html',
    },
    {
      model: 'tuf',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-tuf-rtx3080-10g-gaming-graphics-card.html',
    },
    {
      model: 'tuf oc',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/asus-tuf-rtx3080-o10g-gaming-graphics-card.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-ftw3-gaming-10g-p5-3895-kr-10gb-gddr6x-icx3-technology-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-ftw3-ultra-gaming-10g-p5-3897-kr-10gb-gddr6x-icx3-technology-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      model: 'xc3 black',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-black-gaming-10g-p5-3881-kr-10gb-gddr6x-icx3-cooling-argb-led-hdmi-dpx3.html',
    },
    {
      model: 'xc3',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-gaming-10g-p5-3883-kr-10gb-gddr6x-icx3-cooling-argb-led-metal-backplate-hdmi-dpx3.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/evga-geforce-rtx-3080-xc3-ultra-gaming-10g-p5-3885-kr-10gb-gddr6x-icx3-cooling-argb-led-metal-backplate-hdmi-dpx3.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080aorus-m-10gd-aorus-geforce-rtx-3080-master-10gb.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-aorus-geforce-rtx-3080-xtreme-10g.html',
    },
    {
      model: 'eagle oc',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-geforce-rtx-3080-eagle-oc-10gb-graphics-card-gv-n3080eagle-oc-10gd.html',
    },
    {
      model: 'gaming oc',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080gaming-oc-10gd-graphics-card.html',
    },
    {
      model: 'vision oc',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/gigabyte-gv-n3080vision-oc-10gd-geforce-rtx-3080-vision-oc-10gb.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/inno3d-c30803-106xx-1810va37-geforce-rtx-3080-ichill-x3-10g.html',
    },
    {
      model: 'ichill x4',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/inno3d-c30804-106xx-1810va36-geforce-rtx-3080-ichill-x4-10g.html',
    },
  ]),

  // Leadtek Cards
  ...createBrandSeriesLinks('leadtek', '3080', [
    {
      model: 'hurricane',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/leadtek-12789000110-geforce-rtx-3080-hurricane.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-rtx-3080-gaming-x-trio-10g-graphics-card.html',
    },
    {
      model: 'suprim x',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-geforce-rtx-3080-suprim-x-10g-graphics-card.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://cplonline.com.au/graphics-cards/geforce-rtx-3080/msi-rtx-3080-ventus-3x-10g-oc-graphics-card.html',
    },
  ]),
];
