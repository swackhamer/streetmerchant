import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for bandh 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'ko oc',
      url: 'https://www.bhphotovideo.com/c/product/1609756-REG/asus_ko_rtx3060ti_o8g_gaming_ko_geforce_rtx_3060.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.bhphotovideo.com/c/product/1607025-REG/asus_tuf_rtx3060ti_o8g_gaming_geforce_rtx_3060_ti.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle oc',
      url: 'https://www.bhphotovideo.com/c/product/1606948-REG/gigabyte_gv_n306teagle_oc_8gd_rtx_3060_ti_eagle.html',
    },
    {
      model: 'eagle',
      url: 'https://www.bhphotovideo.com/c/product/1606949-REG/gigabyte_gv_n306teagle_8gd_rtx_3060_ti_eagle.html',
    },
    {
      model: 'aorus',
      url: 'https://www.bhphotovideo.com/c/product/1606945-REG/gigabyte_gv_n306taorus_m_8gd_aorus_rtx_3060_ti.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.bhphotovideo.com/c/product/1606947-REG/gigabyte_gv_n306tgaming_oc_8gd_rtx_3060_ti_gaming.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.bhphotovideo.com/c/product/1606946-REG/gigabyte_gv_n306tgamingoc_pro_8gd_rtx_3060_ti_gaming.html',
    },
  ]),

];
