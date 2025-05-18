import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bandh 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1593333-REG/gigabyte_gv_n3080gaming_oc_10gd_geforce_rtx_3080_gaming.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.bhphotovideo.com/c/product/1592969-REG/zotac_zt_a30800d_10p_gaming_geforce_rtx_3080.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.bhphotovideo.com/c/product/1593650-REG/asus_tuf_rtx3080_o10g_gaming_tuf_gaming_geforce_rtx.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.bhphotovideo.com/c/product/1603617-REG/asus_rog_strix_rtx3080_o10g_gaming_rog_strix_geforce_rtx.html',
    },
    {
      model: 'strix white',
      url: 'https://www.bhphotovideo.com/c/product/1614301-REG/asus_rog_strix_rtx3080_o10g_white_rog_strix_geforce_rtx.html',
    },
    {
      model: 'ekwb',
      url: 'https://www.bhphotovideo.com/c/product/1614303-REG/asus_rtx3080_10g_ek_ekwb_geforce_rtx_3080.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.bhphotovideo.com/c/product/1593996-REG/msi_g3080gxt10_geforce_rtx_3080_gaming.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1593997-REG/msi_g3080v3x10c_geforce_rtx_3080_ventus.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.bhphotovideo.com/c/product/1593645-REG/msi_geforce_rtx_3080_gaming.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1593646-REG/msi_geforce_rtx_3080_ventus.html',
    },
  ]),
];
