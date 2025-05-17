import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bandh 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.bhphotovideo.com/c/product/1602755-REG/asus_dualrtx30708g_geforce_rtx_3070_8g.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.bhphotovideo.com/c/product/1602756-REG/asus_strixrtx3070o8_rog_strix_geforce_rtx.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.bhphotovideo.com/c/product/1603974-REG/asus_dualrtx3070o8g_dual_geforce_rtx_3070.html',
    },
    {
      model: 'ko oc',
      url: 'https://www.bhphotovideo.com/c/product/1606745-REG/asus_90yv0fq2_m0aa00_ko_nvidia_geforce_rtx.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.bhphotovideo.com/c/product/1606746-REG/asus_tuf_rtx3070_o8g_gaming_tuf_gaming_nvidia_geforce.html',
    },
    {
      model: 'ekwb',
      url: 'https://www.bhphotovideo.com/c/product/1614305-REG/asus_rtx3070_8g_ek_ekwb_geforce_rtx_3070.html',
    },
    {
      model: 'strix white',
      url: 'https://www.bhphotovideo.com/c/product/1614300-REG/asus_rog_strix_rtx3070_o8g_white_rog_strix_geforce_rtx.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'dual fan',
      url: 'https://www.bhphotovideo.com/c/product/1595984-REG/pny_technologies_vcg30708tfxppb_geforce_rtx_3070_epic_x.html',
    },
  ]),

];
