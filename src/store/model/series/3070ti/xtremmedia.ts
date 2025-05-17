import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for xtremmedia 3070ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070ti', [
    {
      model: 'tuf oc',
      url: 'https://xtremmedia.com/Asus_TUF_Gaming_GeForce_RTX_3070_Ti_OC_8GB_GDDR6X.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070ti', [
    {
      model: 'aorus master',
      url: 'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3070Ti_MASTER_8GB_GDDR6X.html',
    },
    {
      model: 'eagle',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_EAGLE_8GB_GDDR6X.html',
    },
    {
      model: 'eagle oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_EAGLE_OC_8GB_GDDR6X.html',
    },
    {
      model: 'gaming oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_Gaming_OC_8GB_GDDR6X.html',
    },
    {
      model: 'vision oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_VISION_OC_8GB_GDDR6X.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070ti', [
    {
      model: 'suprim x',
      url: 'https://xtremmedia.com/Msi_GeForce_RTX_3070Ti_Suprim_X_8GB_GDDR6X.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070ti', [
    {
      model: 'xlr8 revel',
      url: 'https://xtremmedia.com/Pny_GeForce_3070Ti_XLR8_Gaming_REVEL_8GB_GDDR6X.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070ti', [
    {
      model: 'amp holo',
      url: 'https://xtremmedia.com/Zotac_GeForce_RTX_3070Ti_AMP_Holo_8GB_GDDR6X.html',
    },
    {
      model: 'trinity',
      url: 'https://xtremmedia.com/Zotac_GeForce_RTX_3070Ti_Trinity_8GB_GDDR6X.html',
    },
  ]),

];
