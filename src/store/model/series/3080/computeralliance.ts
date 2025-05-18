import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for computeralliance 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.computeralliance.com.au/asus-rtx3080-10gb-tuf-gaming-pcie-video-card-tuf-rtx3080-10g-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://www.computeralliance.com.au/asus-rtx3080-10gb-tuf-oc-gaming-pcie-video-card-tuf-rtx3080-o10g-gaming',
    },
    {
      model: 'strix oc',
      url: 'https://www.computeralliance.com.au/asus-rtx3080-10gb-rog-strix-oc-gaming-pcie-video-card-rog-strix-rtx3080-o10g-gaming',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.computeralliance.com.au/evga-rtx3080-10gb-ftw3-ultra-gaming-pcie-video-card-10g-p5-3897-kr',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.computeralliance.com.au/evga-rtx3080-10gb-xc3-ultra-gaming-pcie-video-card-10g-p5-3885-kr',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.computeralliance.com.au/galax-rtx3080-10gb-sg-1-click-oc-pcie-video-card-38nwm3md99nn',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-aorus-master-pcie-video-card-gv-n3080aorus-m-10gd',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-aorus-xtreme-pcie-video-card-gv-n3080aorus-x-10gd',
    },
    {
      model: 'eagle oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-eagle-oc-pcie-video-card-gv-n3080eagle-oc-10gd',
    },
    {
      model: 'gaming oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-gaming-oc-pcie-video-card-gv-n3080gaming-oc-10gd',
    },
    {
      model: 'vision oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3080-10gb-vision-oc-pcie-video-card-gv-n3080vision-oc-10gd',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.computeralliance.com.au/inno3d-geforce-rtx-3080-ichill-x4-10gb-video-card-c30804-106xx-1810va36',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.computeralliance.com.au/msi-rtx3080-10gb-gaming-x-trio-pcie-video-card',
    },
    {
      model: 'suprim x',
      url: 'https://www.computeralliance.com.au/msi-rtx3080-10gb-suprim-x-pcie-video-card',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.computeralliance.com.au/msi-rtx3080-10gb-ventus-3x-oc-pcie-video-card',
    },
  ]),
];
