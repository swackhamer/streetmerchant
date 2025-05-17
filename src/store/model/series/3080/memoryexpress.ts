import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for memoryexpress 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'eagle',
      url: 'https://www.memoryexpress.com/Products/MX00114687',
    },
    {
      model: 'eagle oc',
      url: 'https://www.memoryexpress.com/Products/MX00113955',
    },
    {
      model: 'gaming oc',
      url: 'https://www.memoryexpress.com/Products/MX00113954',
    },
    {
      model: 'vision oc',
      url: 'https://www.memoryexpress.com/Products/MX00114313',
    },
    {
      model: 'aorus master',
      url: 'https://www.memoryexpress.com/Products/MX00114312',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.memoryexpress.com/Products/MX00114404',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3 black',
      url: 'https://www.memoryexpress.com/Products/MX00114094',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00113972',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.memoryexpress.com/Products/MX00114024',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.memoryexpress.com/Products/MX00114003',
    },
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00114092',
    },
    {
      model: 'strix oc',
      url: 'https://www.memoryexpress.com/Products/MX00115134',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.memoryexpress.com/Products/MX00113956',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.memoryexpress.com/Products/MX00113957',
    },
    {
      model: 'suprim x',
      url: 'https://www.memoryexpress.com/Products/MX00114907',
    },
  ]),

];
