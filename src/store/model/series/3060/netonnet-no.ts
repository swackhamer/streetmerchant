import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for netonnet-no 3060 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'vision oc',
      url: 'https://www.netonnet.no/art/datakomponenter/skjermkort/nvidia/gigabyte-geforce-rtx-3060-vision-oc-12gb/1017250.11111/',
    },
  ]),

];
