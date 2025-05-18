import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bandh 5080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '5080', [
    {
      model: 'prime oc',
      url: 'https://www.bhphotovideo.com/c/product/1872328-REG/asus_prime_rtx5080_o16g_geforce_rtx_5080_prime.html',
    },
    {
      model: 'astral oc',
      url: 'https://www.bhphotovideo.com/c/product/1872329-REG/asus_rog_astral_rtx5080_o16g_gaming_republic_of_gamers_astral.html',
    },
    {
      model: 'tuf gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1872330-REG/asus_tuf_rtx5080_o16g_gaming_geforce_rtx_5080_tuf.html',
    },
    {
      model: 'prime',
      url: 'https://www.bhphotovideo.com/c/product/1874876-REG/asus_prime_rtx5080_16g_geforce_rtx_5080_prime.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '5080', [
    {
      model: 'gaming trio oc',
      url: 'https://www.bhphotovideo.com/c/product/1875457-REG/msi_g5080_16gtc_geforce_rtx_5080_gaming.html',
    },
    {
      model: 'gaming trio oc white',
      url: 'https://www.bhphotovideo.com/c/product/1875458-REG/msi_g5080_16gtcw_geforce_rtx_5080_gaming.html',
    },
    {
      model: 'inspire 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1875459-REG/msi_g5080_16i3c_geforce_rtx_5080_inspire.html',
    },
    {
      model: 'suprim soc',
      url: 'https://www.bhphotovideo.com/c/product/1875461-REG/msi_g5080_16sps_geforce_rtx_5080_suprim.html',
    },
    {
      model: 'ventus 3x oc plus',
      url: 'https://www.bhphotovideo.com/c/product/1875462-REG/msi_g5080_16v3cp_geforce_rtx_5080_ventus.html',
    },
    {
      model: 'vanguard soc',
      url: 'https://www.bhphotovideo.com/c/product/1875463-REG/msi_g5080_16vgs_geforce_rtx_5080_vanguard.html',
    },
    {
      model: 'vanguard soc launch edition',
      url: 'https://www.bhphotovideo.com/c/product/1875464-REG/msi_g5080_16vgsl_geforce_rtx_5080_vanguard.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '5080', [
    {
      model: 'suprim liquid soc',
      url: 'https://www.bhphotovideo.com/c/product/1875460-REG/msi_g5080_16sls_geforce_rtx_5080_suprim.html',
    },
    {
      model: 'triple fan oc',
      url: 'https://www.bhphotovideo.com/c/product/1874645-REG/pny_vcg508016tfxpb1_o_nvidia_geforce_rtx_5080.html',
    },
    {
      model: 'epic x',
      url: 'https://www.bhphotovideo.com/c/product/1874646-REG/pny_vcg508016tfxxpb1_o_nvidia_geforce_rtx_5080.html',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.bhphotovideo.com/c/product/1875714-REG/gigabyte_gv_n5080aorusx_w_16gd_geforce_rtx_5080_aorus.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5080', [
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1872786-REG/gigabyte_gv_n5080gaming_oc_16gd_geforce_rtx_5080_gaming.html',
    },
    {
      model: 'aero oc sff',
      url: 'https://www.bhphotovideo.com/c/product/1875711-REG/gigabyte_gv_n5080aero_oc_16gd_geforce_rtx_5080_aero.html',
    },
    {
      model: 'windforce oc sff',
      url: 'https://www.bhphotovideo.com/c/product/1875716-REG/gigabyte_gv_n5080wf3oc_16gd_geforce_rtx_5080_windforce.html',
    },
    {
      model: 'master ice',
      url: 'https://www.bhphotovideo.com/c/product/1875713-REG/gigabyte_gv_n5080aorusm_ice_16gd_geforce_rtx_5080_master.html',
    },
    {
      model: 'master',
      url: 'https://www.bhphotovideo.com/c/product/1875712-REG/gigabyte_gv_n5080aorus_m_16gd_geforce_rtx_5080_master.html',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.bhphotovideo.com/c/product/1875715-REG/gigabyte_gv_n5080aorusx_wb_16gd_geforce_rtx_5080_aorus.html',
    },
  ]),
];
