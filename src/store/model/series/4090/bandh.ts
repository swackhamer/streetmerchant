import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for bandh 4090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '4090', [
    {
      model: 'trinity oc',
      url: 'https://www.bhphotovideo.com/c/product/1730538-REG/zotac_zt_d40900j_10p_geforce_rtx_4090_trinity.html',
    },
    {
      model: 'trinity',
      url: 'https://www.bhphotovideo.com/c/product/1730540-REG/zotac_zt_d40900d_10p_geforce_rtx_4090_trinity.html',
    },
    {
      model: 'amp extreme airo',
      url: 'https://www.bhphotovideo.com/c/product/1730539-REG/zotac_zt_d40900b_10p_geforce_rtx_4090_amp.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '4090', [
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1729221-REG/gigabyte_gv_n4090gaming_oc_24gd_geforce_rtx_4090_gaming.html',
    },
    {
      model: 'windforce',
      url: 'https://www.bhphotovideo.com/c/product/1729222-REG/gigabyte_gv_n4090wf3_24gd_geforce_rtx_4090_windforce.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '4090', [
    {
      model: 'strix oc',
      url: 'https://www.bhphotovideo.com/c/product/1729257-REG/asus_rog_strix_rtx4090_o24g_gaming_geforce_rtx_4090_rog.html',
    },
    {
      model: 'tuf',
      url: 'https://www.bhphotovideo.com/c/product/1730937-REG/asus_tuf_rtx4090_24g_gaming_geforce_rtx_4090_tuf.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.bhphotovideo.com/c/product/1729258-REG/asus_tuf_rtx4090_o24g_gaming_geforce_rtx_4090_tuf.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '4090', [
    {
      model: 'suprim x',
      url: 'https://www.bhphotovideo.com/c/product/1729349-REG/msi_g4090sx24_geforce_rtx_4090_suprim.html',
    },
    {
      model: 'suprim liquid x',
      url: 'https://www.bhphotovideo.com/c/product/1729348-REG/msi_g4090slx24_geforce_rtx_4090_suprim.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.bhphotovideo.com/c/product/1729347-REG/msi_g4090gxt24_geforce_rtx_4090_gaming.html',
    },
    {
      model: 'gaming trio',
      url: 'https://www.bhphotovideo.com/c/product/1729346-REG/msi_g4090gt24_geforce_rtx_4090_gaming.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '4090', [
    {
      model: 'gaming verto epic-x',
      url: 'https://www.bhphotovideo.com/c/product/1729096-REG/pny_vcg409024tfxxpb1_geforce_rtx_4090_24gb.html',
    },
  ]),
];
