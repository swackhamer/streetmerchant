import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bandh 3090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.bhphotovideo.com/c/product/1592970-REG/zotac_zt_a30900d_10p_gaming_geforce_rtx_3090.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'gaming x trio',
      url: 'https://www.bhphotovideo.com/c/product/1593647-REG/msi_geforce_rtx_3090_gaming.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.bhphotovideo.com/c/product/1593994-REG/msi_g3090gxt24_geforce_rtx_3090_gaming.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1593648-REG/msi_geforce_rtx_3090_ventus.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1593995-REG/msi_g3090v3x24c_geforce_rtx_3090_ventus.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'eagle oc',
      url: 'https://www.bhphotovideo.com/c/product/1593334-REG/gigabyte_gv_n3090eagle_oc_24gd_geforce_rtx_3090_eagle.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1593335-REG/gigabyte_gv_n3090gaming_oc_24gd_geforce_rtx3090_gaming_oc.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.bhphotovideo.com/c/product/1594454-REG/asus_90yv0fd0_m0am00_tuf_gaming_geforce_rtx.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.bhphotovideo.com/c/product/1594451-REG/asus_90yv0fd1_m0am00_tuf_gaming_geforce_rtx.html',
    },
    {
      model: 'ekwb',
      url: 'https://www.bhphotovideo.com/c/product/1607043-REG/asus_rtx3090_24g_ek_geforce_rtx_3090_24g.html',
    },
    {
      model: 'strix',
      url: 'https://www.bhphotovideo.com/c/product/1601764-REG/asus_rog_strix_rtx3090_o24g_gaming_rog_strix_geforce_rtx.html',
    },
    {
      model: 'strix white',
      url: 'https://www.bhphotovideo.com/c/product/1614302-REG/asus_rog_strix_rtx3090_o24g_white_rog_strix_geforce_rtx.html',
    },
  ]),

];
