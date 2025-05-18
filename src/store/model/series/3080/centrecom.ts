import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for centrecom 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.centrecom.com.au/asus-geforce-rtx-3080-tuf-oc-10gb-gaming-graphics-card',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.centrecom.com.au/galax-geforce-rtx-3080-sg-1-click-oc-graphics-card',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.centrecom.com.au/gigabyte-aorus-geforce-rtx-3080-master-graphics-card',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.centrecom.com.au/gigabyte-geforce-rtx-3080-aorus-extreme-10gb-gddr6x-graphics-card',
    },
    {
      model: 'eagle oc',
      url: 'https://www.centrecom.com.au/gigabyte-geforce-rtx-3080-eagle-oc-10g-graphics-card',
    },
    {
      model: 'gaming oc',
      url: 'https://www.centrecom.com.au/gigabyte-geforce-rtx-3080-gaming-oc-10g-graphics-card',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.centrecom.com.au/msi-geforce-rtx-3080-gaming-x-trio-10g-graphics-card',
    },
    {
      model: 'suprim x',
      url: 'https://www.centrecom.com.au/msi-geforce-rtx-3080-suprim-x-10g-graphics-card',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.centrecom.com.au/msi-geforce-rtx-3080-ventus-3x-oc-10gb-graphics-card',
    },
  ]),
];
