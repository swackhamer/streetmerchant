import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for xtremmedia 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080Ti_12GB_GDDR6X.html',
    },
    {
      model: 'strix oc',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080_Ti_OC_12GB_GDDR6X.html',
    },
    {
      model: 'tuf',
      url: 'https://xtremmedia.com/Asus_TUF_Gaming_GeForce_RTX_3080Ti_12GB_GDDR6X.html',
    },
    {
      model: 'tuf oc',
      url: 'https://xtremmedia.com/Asus_TUF_Gaming_GeForce_RTX_3080Ti_OC_12GB_GDDR6X.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://xtremmedia.com/EVGA_GeForce_RTX_3080Ti_FTW3_ULTRA_GAMING_12GB_GDDR6X.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'aorus master',
      url: 'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3080Ti_MASTER_12GB_GDDR6X.html',
    },
    {
      model: 'eagle',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_EAGLE_12GB_GDDR6X.html',
    },
    {
      model: 'eagle oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_EAGLE_OC_12GB_GDDR6X.html',
    },
    {
      model: 'gaming oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_Gaming_OC_12GB_GDDR6X.html',
    },
    {
      model: 'vision oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_VISION_OC_12GB_GDDR6X.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080ti', [
    {
      model: 'xlr8 revel',
      url: 'https://xtremmedia.com/PNY_GeForce_RTX_3080Ti_XLR8_Gaming_REVEL_Edition_12GB_GDDR6X.html',
    },
  ]),
];
