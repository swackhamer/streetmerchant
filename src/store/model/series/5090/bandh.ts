import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bandh 5090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '5090', [
    {
      model: 'gaming trio oc',
      url: 'https://www.bhphotovideo.com/c/product/1875465-REG/msi_g5090_32gtc_geforce_rtx_5090_gaming.html',
    },
    {
      model: 'suprim liquid soc',
      url: 'https://www.bhphotovideo.com/c/product/1875466-REG/msi_g5090_32sls_geforce_rtx_5090_suprim.html',
    },
    {
      model: 'suprim soc',
      url: 'https://www.bhphotovideo.com/c/product/1875467-REG/msi_g5090_32sps_geforce_rtx_5090_suprim.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1875468-REG/msi_g5090_32v3c_geforce_rtx_5090_ventus.html',
    },
    {
      model: 'vanguard soc launch edition',
      url: 'https://www.bhphotovideo.com/c/product/1875470-REG/msi_g5090_32vgsl_geforce_rtx_5090_vanguard.html',
    },
    {
      model: 'vanguard soc',
      url: 'https://www.bhphotovideo.com/c/product/1875469-REG/msi_g5090_32vgs_geforce_rtx_5090_vanguard.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '5090', [
    {
      model: 'triple fan oc',
      url: 'https://www.bhphotovideo.com/c/product/1874647-REG/pny_vcg509032tfxpb1_o_nvidia_geforce_rtx_5090.html',
    },
    {
      model: 'epic x oc',
      url: 'https://www.bhphotovideo.com/c/product/1874648-REG/pny_vcg509032tfxxpb1_o_nvidia_geforce_rtx_5090.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5090', [
    {
      model: 'tuf gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1875902-REG/asus_tuf_rtx5090_o32g_gaming_geforce_rtx_5090_tuf.html',
    },
    {
      model: 'astral',
      url: 'https://www.bhphotovideo.com/c/product/1876781-REG/asus_rog_astral_rtx5090_32g_gaming_rog_astral_gfrce_rtx.html',
    },
    {
      model: 'astral oc',
      url: 'https://www.bhphotovideo.com/c/product/1875529-REG/asus_rog_astral_rtx5090_o32g_gaming_geforce_rtx_5090_republic.html',
    },
    {
      model: 'tuf gaming',
      url: 'https://www.bhphotovideo.com/c/product/1875530-REG/asus_tuf_rtx5090_32g_gaming_geforce_rtx_5090_tuf.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5090', [
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.bhphotovideo.com/c/product/1875720-REG/gigabyte_gv_n5090aorusx_wb_32gd_geforce_rtx_5090_aorus.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.bhphotovideo.com/c/product/1875719-REG/gigabyte_gv_n5090aorusx_w_32gd_geforce_rtx_5080_aorus.html',
    },
    {
      model: 'windforce oc',
      url: 'https://www.bhphotovideo.com/c/product/1875722-REG/gigabyte_gv_n5090wf3oc_32gd_geforce_rtx_5090_windforce.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1875721-REG/gigabyte_gv_n5090gaming_oc_32gd_geforce_rtx_5090_gaming.html',
    },
    {
      model: 'master ice',
      url: 'https://www.bhphotovideo.com/c/product/1875718-REG/gigabyte_gv_n5090aorusm_ice_32gd_geforce_rtx_5090_master.html',
    },
    {
      model: 'master',
      url: 'https://www.bhphotovideo.com/c/product/1875717-REG/gigabyte_gv_n5090aorus_m_32gd_geforce_rtx_5090_master.html',
    },
  ]),

];
