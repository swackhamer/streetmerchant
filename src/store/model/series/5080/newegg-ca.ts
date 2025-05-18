import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for newegg-ca 5080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '5080', [
    {
      model: 'aero oc',
      url: 'https://www.newegg.ca/gigabyte-gv-n5080aero-oc-16gd-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814932756',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '5080', [
    {
      model: 'solid',
      url: 'https://www.newegg.ca/zotac-solid-zt-b50800d-10p-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814500596',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '5080', [
    {
      model: 'oc',
      url: 'https://www.newegg.ca/pny-oc-vcg508016tfxpb1-o-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814133899',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '5080', [
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.ca/msi-rtx-5080-16g-ventus-3x-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814137945',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '5080', [
    {
      model: 'prime',
      url: 'https://www.newegg.ca/asus-prime-rtx5080-16g-nvidia-geforce-rtx-5080-16gb-gddr7/p/N82E16814126776',
    },
  ]),
];
