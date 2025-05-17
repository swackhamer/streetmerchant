import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for xtremmedia 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix white',
      url: 'https://xtremmedia.com/Asus_GeForce_ROG_Strix_White_RTX_3080_10GB_GDRR6X.html',
    },
    {
      model: 'strix',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080_Gaming_10GB_GDDR6X.html',
    },
    {
      model: 'strix oc',
      url: 'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080_Gaming_OC_10GB_GDDR6X.html',
    },
    {
      model: 'tuf',
      url: 'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3080_Gaming_10GB_GDDR6X.html',
    },
    {
      model: 'tuf oc',
      url: 'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3080_Gaming_OC_10GB_GDDR6X.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3 ultra',
      url: 'https://xtremmedia.com/EVGA_GeForce_RTX_3080_FTW3_Ultra_Gaming_10GB_GDDR6X.html',
    },
    {
      model: 'xc3 black',
      url: 'https://xtremmedia.com/EVGA_GeForce_RTX_3080_XC3_Black_Gaming_10GB_GDDR6X.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://xtremmedia.com/EVGA_GeForce_RTX_3080_XC3_Ultra_Gaming_10GB_GDDR6X.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus xtreme',
      url: 'https://xtremmedia.com/Gigabyte_Aorus_GeForce_RTX_3080_Xtreme_10G_GDDR6X.html',
    },
    {
      model: 'eagle',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Eagle_10GB_GDDR6X.html',
    },
    {
      model: 'eagle oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Eagle_OC_10GB_GDDR6X.html',
    },
    {
      model: 'gaming oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Gaming_OC_10GB_GDDR6X.html',
    },
    {
      model: 'gaming oc waterforce wb',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_GAMING_OC_OC_WATERFORCE_WB_10GB_GDDR6X.html',
    },
    {
      model: 'aorus master',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_MASTER_10GB_DDR6X.html',
    },
    {
      model: 'vision oc',
      url: 'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Vision_OC_10GB_GDDR6X.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://xtremmedia.com/Msi_GeForce_RTX_3080_Gaming_X_Trio_10GB_GDDR6X.html',
    },
    {
      model: 'gaming z trio',
      url: 'https://xtremmedia.com/Msi_GeForce_RTX_3080_Gaming_Z_Trio_10GB_GDDR6X.html',
    },
    {
      model: 'suprim x',
      url: 'https://xtremmedia.com/MSI_GeForce_RTX_3080_SUPRIM_X_10GB_GDDR6X.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://xtremmedia.com/Msi_GeForce_RTX_3080_Ventus_3X_OC_10GB_GDDR6X.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gamerock',
      url: 'https://xtremmedia.com/Palit_GeForce_RTX_3080_GameRock_10GB_GDDR6X.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://xtremmedia.com/Palit_GeForce_RTX_3080_GameRock_OC_10GB_GDDR6X.html',
    },
    {
      model: 'gaming pro',
      url: 'https://xtremmedia.com/Palit_GeForce_RTX_3080_GamingPro_10GB_GDDR6X.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 gaming',
      url: 'https://xtremmedia.com/PNY_GeForce_RTX_3080_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_10GB_GDDR6X.html',
    },
    {
      model: 'xlr8 gaming',
      url: 'https://xtremmedia.com/PNY_GeForce_RTX_3080_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_10GB_GDDR6X_1.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://xtremmedia.com/Zotac_GeForce_RTX_3080_AMP_Holo_10GB_GDDR6X.html',
    },
    {
      model: 'trinity',
      url: 'https://xtremmedia.com/Zotac_GeForce_RTX_3080_Trinity_10GB_GDDR6X.html',
    },
    {
      model: 'trinity oc',
      url: 'https://xtremmedia.com/Zotac_GeForce_RTX_3080_Trinity_OC_10GB_GDDR6X.html',
    },
  ]),

];
