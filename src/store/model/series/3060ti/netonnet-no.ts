import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for netonnet-no 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060ti-tuf-gaming-8gb/1015570.11111/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060ti-tuf-gaming-oc-8gb/1015565.11111/',
    },
    {
      model: 'strix oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060-ti-rog-strix-gaming-oc-8gb/1016449.11111/',
    },
    {
      model: 'dual',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060ti-dual-oc-8gb/1015673.11111/',
    },
    {
      model: 'strix',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3060ti-rog-strix-gaming-8gb/1015572.11111/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3060-ti-gaming-x-trio/1015906.11111/',
    },
    {
      model: 'gaming x',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-gtx-3060ti-gaming-x/1017017.11111/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'eagle',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-eagle-8g/1015575.11111/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-eagle-oc-8g/1015576.11111/',
    },
    {
      model: 'aorus master',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-aorus-master/1015582.11111/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-ti-gaming-oc-8gb/1015578.11111/',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060ti-gaming-pro-oc/1016888.11111/',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3060ti', [
    {
      model: 'sg',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060ti-gaming-pro-oc/1016888.11111/',
    },
  ]),

];
