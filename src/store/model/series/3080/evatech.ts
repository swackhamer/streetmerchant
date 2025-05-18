import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for evatech 3080 series
 */
export const links: Link[] = [
  // Colorful Cards
  ...createBrandSeriesLinks('colorful', '3080', [
    {
      model: 'igame ultra oc',
      url: 'https://evatech.com.au/product/6511/colorful-igame-rtx-3080-ultra-oc-10g',
    },
    {
      model: 'igame advanced oc',
      url: 'https://evatech.com.au/product/6507/colorful-igame-rtx-3080-advanced-oc-10g',
    },
    {
      model: 'igame vulcan oc',
      url: 'https://evatech.com.au/product/6514/colorful-igame-rtx-3080-vulcan-oc-10g',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://evatech.com.au/product/6574/msi-geforce-rtx-3080-suprim-x-10g',
    },
    {
      model: 'gaming x trio',
      url: 'https://evatech.com.au/product/6505/msi-rtx-3080-gamingx-trio-10g-oc',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://evatech.com.au/product/6494/msi-rtx-3080-ventus-3x-10g-oc',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://evatech.com.au/product/6496/zotac-rtx3080-trinity-10gb-gddr6x',
    },
  ]),
];
