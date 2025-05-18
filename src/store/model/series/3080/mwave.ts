import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for mwave 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'vision oc',
      url: 'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-vision-oc-10gb-video-card-ac38364',
    },
    {
      model: 'gaming oc',
      url: 'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-gaming-oc-10gb-video-card-ac38091',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-10gb-video-card-ac38093',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb-video-card-ac39833',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb-video-card-ac39844',
    },
    {
      model: 'eagle',
      url: 'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-eagle-10gb-video-card-ac39514',
    },
    {
      model: 'eagle oc',
      url: 'https://www.mwave.com.au/product/gigabyte-geforce-rtx-3080-eagle-oc-10gb-video-card-ac38090',
    },
    {
      model: 'aorus master',
      url: 'https://www.mwave.com.au/product/gigabyte-aorus-geforce-rtx-3080-master-10gb-video-card-ac38092',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.mwave.com.au/product/asus-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card-ac38205',
    },
    {
      model: 'strix oc',
      url: 'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-oc-10gb-video-card-ac38206',
    },
    {
      model: 'strix',
      url: 'https://www.mwave.com.au/product/asus-geforce-rtx-3080-rog-strix-gaming-10gb-video-card-ac38086',
    },
    {
      model: 'tuf',
      url: 'https://www.mwave.com.au/product/asus-geforce-rtx-3080-tuf-gaming-10gb-video-card-ac38087',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.mwave.com.au/product/msi-geforce-rtx-3080-suprim-x-10gb-video-card-ac40223',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.mwave.com.au/product/msi-geforce-rtx-3080-ventus-3x-oc-10gb-video-card-ac38105',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.mwave.com.au/product/msi-geforce-rtx-3080-gaming-x-trio-10gb-video-card-ac38107',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.mwave.com.au/product/evga-geforce-rtx-3080-ftw3-gaming-10gb-video-card-ac38468',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.mwave.com.au/product/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-video-card-ac38322',
    },
    {
      model: 'xc3 black',
      url: 'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-black-gaming-10gb-video-card-ac38323',
    },
    {
      model: 'xc3',
      url: 'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-gaming-10gb-video-card-ac38325',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.mwave.com.au/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-video-card-ac38327',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.mwave.com.au/product/inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card-ac38355',
    },
    {
      model: 'ichill x3',
      url: 'https://www.mwave.com.au/product/inno3d-geforce-rtx-3080-ichill-x3-10gb-video-card-ac38356',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.mwave.com.au/product/pny-geforce-rtx-3080-xlr8-gaming-revel-epicx-rgb-10gb-video-card-ac38114',
    },
    {
      model: 'xlr8 uprising',
      url: 'https://www.mwave.com.au/product/pny-geforce-rtx-3080-xlr8-gaming-uprising-epicx-rgb-10gb-video-card-ac38115',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.mwave.com.au/product/galax-geforce-rtx-3080-sg-1click-oc-10gb-video-card-ac38128',
    },
  ]),
];
