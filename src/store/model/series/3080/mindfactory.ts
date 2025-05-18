import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for mindfactory 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-AORUS-MASTER-GDDR6X-3xHDMI-3xDP--Retail-_1378681.html',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-AORUS-XTREME-GDDR6X-3xHDMI-3xDP--Retail-_1380484.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-GeForce-RTX-3080-Gaming-OC-3xDP-2x-HDMI--Retail-_1376263.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Gigabyte-RTX3080-VISION-OC-GDDR6X-2xHDMI-3xDP--Retail-_1378682.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.mindfactory.de/product_info.php/10GB-MSI-GeForce-RTX-3080-Gaming-X-TRIO--Retail-_1376481.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Palit-GeForce-RTX-3080-GamingPro--Retail-_1376483.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity oc',
      url: 'https://www.mindfactory.de/product_info.php/10GB-Zotac-GeForce-RTX-3080-TRINITY-OC--GDDR6X-_1377143.html',
    },
  ]),
];
