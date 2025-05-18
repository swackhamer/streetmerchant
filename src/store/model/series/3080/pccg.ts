import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for pccg 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.pccasegear.com/products/51675/asus-geforce-rtx-3080-tuf-gaming-10gb',
    },
    {
      model: 'tuf oc',
      url: 'https://www.pccasegear.com/products/51767/asus-geforce-rtx-3080-tuf-gaming-oc-10gb',
    },
    {
      model: 'strix',
      url: 'https://www.pccasegear.com/products/52274/asus-rog-strix-geforce-rtx-3080-10gb',
    },
    {
      model: 'strix oc',
      url: 'https://www.pccasegear.com/products/51850/asus-rog-strix-geforce-rtx-3080-oc-10gb',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.pccasegear.com/products/51687/galax-geforce-rtx-3080-sg-1-click-oc-10gb',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'vision oc',
      url: 'https://www.pccasegear.com/products/51766/gigabyte-geforce-rtx-3080-vision-oc-10gb',
    },
    {
      model: 'gaming oc',
      url: 'https://www.pccasegear.com/products/51678/gigabyte-geforce-rtx-3080-gaming-oc-10gb',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.pccasegear.com/products/52012/gigabyte-aorus-geforce-rtx-3080-xtreme-10gb',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.pccasegear.com/products/52679/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10gb',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.pccasegear.com/products/52410/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10gb',
    },
    {
      model: 'eagle oc',
      url: 'https://www.pccasegear.com/products/51679/gigabyte-geforce-rtx-3080-eagle-oc-10gb',
    },
    {
      model: 'aorus master',
      url: 'https://www.pccasegear.com/products/51765/gigabyte-aorus-geforce-rtx-3080-master-10gb',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.pccasegear.com/products/51685/inno3d-geforce-rtx-3080-ichill-x4-10gb',
    },
    {
      model: 'ichill x3',
      url: 'https://www.pccasegear.com/products/51684/inno3d-geforce-rtx-3080-ichill-x3-10gb',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.pccasegear.com/products/52277/inno3d-geforce-rtx-3080-twin-x2-oc-10gb',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.pccasegear.com/products/52533/msi-geforce-rtx-3080-suprim-x-oc-10gb',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.pccasegear.com/products/51681/msi-geforce-rtx-3080-ventus-3x-oc-10gb',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.pccasegear.com/products/51752/msi-geforce-rtx-3080-gaming-x-trio-10gb',
    },
  ]),
];
