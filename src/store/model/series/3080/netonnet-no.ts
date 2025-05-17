import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for netonnet-no 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3080-rog-strix-gaming-oc-white-10gb/1015992.11111/',
    },
    {
      model: 'strix white',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3080-rog-strix-gaming-oc-10gb/1016281.11111/',
    },
    {
      model: 'tuf',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3080-tuf-gaming-10g/1014354.11111/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3080-tuf-gaming-oc-10gb/1015670.11111/',
    },
    {
      model: 'strix',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/asus-geforce-rtx-3080-rog-strix-gaming-10g/1014394.11111/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g/1014380.11111/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-eagle-oc-10g/1014382.11111/',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-aorus-xtream-10gb/1015517.11111/',
    },
    {
      model: 'vision oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3080-vision-oc-10gb/1016320.11111/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-ventus-3x-10g-oc/1014374.11111/',
    },
    {
      model: 'suprim x',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-suprim-x-10g/1015474.11111/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/msi-geforce-rtx-3080-gaming-x-trio-10g/1014373.11111/',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3080', [
    {
      model: 'sg',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/kfa2-geforce-rtx-3080-sg-10gb/1014681.11111/',
    },
  ]),

];
