import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for xtremmedia 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'ekwb',
      url: 'https://xtremmedia.com/Asus_EKWB_GeForce_RTX_3090_24GB_GDDR6X.html',
    },
    {
      model: 'strix',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_Gaming_24GB_GDDR6X.html',
    },
    {
      model: 'strix oc',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_Gaming_OC_24GB_GDDR6X.html',
    },
    {
      model: 'strix oc white',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_OC_White_24GB_GDDR6X.html',
    },
    {
      model: 'strix white',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_White_24GB_GDDR6X.html',
    },
    {
      model: 'tuf',
      url: 'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3090_Gaming_24GB_GDDR6X.html',
    },
    {
      model: 'tuf oc',
      url: 'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3090_Gaming_OC_24GB_GDDR6X.html',
    },
    {
      model: 'turbo',
      url: 'https://xtremmedia.com/Asus_Turbo_GeForce_RTX_3090_24GB_GDDR6X.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3 ultra',
      url: 'https://xtremmedia.com/EVGA_GeForce_RTX_3090_FTW3_Ultra_Gaming_24GB_GDDR6X.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://xtremmedia.com/EVGA_GeForce_RTX_3090_XC3_Ultra_Gaming_24GB_GDDR6X.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'aorus box',
      url: 'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3090_24GB_Gaming_Box.html',
    },
    {
      model: 'aorus',
      url: 'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3090_24GB_GDDR6X.html',
    },
    {
      model: 'aorus master',
      url: 'https://xtremmedia.com/Gigabyte_Aorus_GeForce_RTX_3090_Master_24GB_DDR6X.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3090_Xtreme_WaterForce_24GB_GDDR6X.html',
    },
    {
      model: 'eagle oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Eagle_OC_24GB_GDDR6X.html',
    },
    {
      model: 'gaming oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Gaming_OC_24GB_GDDR6X.html',
    },
    {
      model: 'turbo',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Turbo_24GB_GDDR6X.html',
    },
    {
      model: 'vision oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Vision_OC_24GB_GDDR6X.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://xtremmedia.com/Msi_GeForce_RTX_3090_Gaming_X_Trio_24GB_GDDR6X_1.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://xtremmedia.com/Msi_GeForce_RTX_3090_VENTUS_3X_OC_24GB_GDDR6X.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3090', [
    {
      model: 'gamerock',
      url: 'https://xtremmedia.com/Palit_GeForce_RTX_3090_GameRock_24GB_GDDR6X.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 gaming',
      url: 'https://xtremmedia.com/PNY_GeForce_RTX_3090_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_24GB_GDDR6X.html',
    },
    {
      model: 'xlr8 gaming',
      url: 'https://xtremmedia.com/PNY_GeForce_RTX_3090_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_24GB_GDDR6X_1.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://xtremmedia.com/Zotac_GeForce_RTX_3090_Trinity_24GB_GDDR6X.html',
    },
  ]),
];
