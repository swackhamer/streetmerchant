import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for bandh 4080-16g series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '4080-16g', [
    {
      model: 'xlr8 verto epic x',
      url: 'https://www.bhphotovideo.com/c/product/1729444-REG/pny_vcg408016tfxxpb1_nvidia_geforce_rtx_4080.html',
    },
    {
      model: 'xlr8 verto oc',
      url: '',
    },
    {
      model: 'xlr8 verto epic x',
      url: 'https://www.bhphotovideo.com/c/product/1729444-REG/pny_vcg408016tfxxpb1_nvidia_geforce_rtx_4080.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '4080-16g', [
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1731403-REG/gigabyte_gv_n4080gaming_oc_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.bhphotovideo.com/c/product/1731405-REG/gigabyte_gv_n4080eagle_oc_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'aero oc',
      url: 'https://www.bhphotovideo.com/c/product/1731404-REG/gigabyte_gv_n4080aero_oc_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'eagle',
      url: 'https://www.bhphotovideo.com/c/product/1731409-REG/gigabyte_gv_n4080eagle_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'master',
      url: '',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '4080-16g', [
    {
      model: 'amp extreme airo',
      url: 'https://www.bhphotovideo.com/c/product/1732733-REG/zotac_zt_d40810b_10p_geforce_rtx_4080_amp.html',
    },
    {
      model: 'trinity',
      url: 'https://www.bhphotovideo.com/c/product/1732735-REG/zotac_zt_d40810d_10p_geforce_rtx_4080_trinity.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.bhphotovideo.com/c/product/1732734-REG/zotac_zt_d40810j_10p_geforce_rtx_4080_trinity.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '4080-16g', [
    {
      model: 'strix oc',
      url: 'https://www.bhphotovideo.com/c/product/1733173-REG/asus_rog_strix_rtx4080_o16g_gaming_geforce_rtx_4080_republic.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.bhphotovideo.com/c/product/1733163-REG/asus_tuf_rtx4080_o16g_gaming_geforce_rtx_4080_tuf.html',
    },
    {
      model: 'tuf',
      url: 'https://www.bhphotovideo.com/c/product/1733171-REG/asus_tuf_rtx4080_16g_gaming_geforce_rtx_4080_tuf.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '4080-16g', [
    {
      model: 'suprim x',
      url: 'https://www.bhphotovideo.com/c/product/1733724-REG/msi_g408016sx_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.bhphotovideo.com/c/product/1733725-REG/msi_g408016gxt_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.bhphotovideo.com/c/product/1733740-REG/msi_g408016v3x_geforce_rtx_4080_16gb.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.bhphotovideo.com/c/product/1733739-REG/msi_g408016v3xc_geforce_rtx_4080_16gb.html',
    },
  ]),
];
