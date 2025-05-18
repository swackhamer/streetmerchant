import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for computeralliance 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.computeralliance.com.au/asus-rtx3090-24gb-tuf-gaming-pcie-video-card-tuf-rtx3090-24g-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://www.computeralliance.com.au/asus-rtx3090-24gb-tuf-gaming-pcie-oc-video-card-tuf-rtx3090-o24g-gaming',
    },
    {
      model: 'strix oc',
      url: 'https://www.computeralliance.com.au/asus-rtx3090-24gb-rog-strix-oc-pcie-video-card-rog-strix-rtx3090-o24g-gaming',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3090', [
    {
      model: 'sg oc',
      url: 'https://www.computeralliance.com.au/galax-rtx3090-24gb-sg-1-click-oc-pcie-video-card-39nsm5md1gna',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus master',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-aorus-master-pcie-video-card-gv-n3090aorus-m-24gd',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-aorus-xtreme-pcie-video-card-gv-n3090aorus-x-24gd',
    },
    {
      model: 'eagle oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-eagle-oc-pcie-video-card-gv-n3090eagle-oc-24gd',
    },
    {
      model: 'gaming oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-gaming-oc-pcie-video-card-gv-n3090gaming-oc-24gd',
    },
    {
      model: 'vision oc',
      url: 'https://www.computeralliance.com.au/gigabyte-rtx3090-24gb-vision-oc-pcie-video-card-gv-n3090vision-oc-24gd',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3090', [
    {
      model: 'ichill x4',
      url: 'https://www.computeralliance.com.au/inno3d-geforce-rtx-3090-ichill-x4-24gb-video-card-c30904-246xx-1880va36',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.computeralliance.com.au/msi-rtx3090-24gb-ventus-3x-oc-pcie-video-card',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.computeralliance.com.au/msi-rtx3090-24gb-gaming-x-trio-pcie-video-card',
    },
    {
      model: 'suprim x',
      url: 'https://www.computeralliance.com.au/msi-rtx3090-24gb-suprim-x-pcie-video-card',
    },
  ]),
];
