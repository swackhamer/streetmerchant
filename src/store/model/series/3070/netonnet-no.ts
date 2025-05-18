import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for netonnet-no 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-dual-oc-8gb/1015671.11111/',
    },
    {
      model: 'tuf',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-tuf-gaming/1014925.11111/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-tuf-gaming-oc-8gb/1015672.11111/',
    },
    {
      model: 'strix oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3070-rog-strix-gaming-oc-8gb/1016448.11111/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3070-ventus-2x-oc/1014370.11111/',
    },
    {
      model: 'suprim',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3070-suprim-8g/1016112.11111/',
    },
    {
      model: 'suprim x',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3070-suprim-x-8g/1015718.11111/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'eagle',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-eagle-oc-8g/1014993.11111/',
    },
    {
      model: 'aorus master',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-master-8gb/1016319.11111/',
    },
    {
      model: 'vision oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-vision-oc-8gb/1015511.11111/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3070-gaming-oc-8g/1014992.11111/',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3070', [
    {
      model: 'sg',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/kfa2-geforce-rtx-3070-1-click-oc-8gb/1017014.11111/',
    },
  ]),
];
