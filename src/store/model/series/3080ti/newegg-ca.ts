import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for newegg-ca 3080ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080ti', [
    {
      model: 'strix',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-ti-rog-strix-rtx3080ti-o12g-gaming/p/N82E16814126508',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-ti-tuf-rtx3080ti-o12g-gaming/p/N82E16814126509',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-ti-tuf-rtx3080ti-12g-gaming/p/N82E16814126510',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080ti', [
    {
      model: 'eagle',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308teagle-12gd/p/N82E16814932439',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-xtreme-12g/p/N82E16814932440',
    },
    {
      model: 'eagle oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308teagle-oc-12gd/p/N82E16814932438',
    },
    {
      model: 'vision oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308tvision-oc-12gd/p/N82E16814932437',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308tgaming-oc-12gd/p/N82E16814932436',
    },
    {
      model: 'aorus',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308taorus-m-12gd/p/N82E16814932435',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080ti', [
    {
      model: 'amp holo',
      url: 'https://www.newegg.ca/zotac-zt-a30810f-10p/p/N82E16814500515',
    },
    {
      model: 'trinity',
      url: 'https://www.newegg.ca/zotac-zt-a30810d-10p/p/N82E16814500514',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080ti', [
    {
      model: 'xc3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-ti-12g-p5-3955-kr/p/N82E16814487548',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-ti-12g-p5-3967-kr/p/N82E16814487547',
    },
    {
      model: 'xc3',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-ti-12g-p5-3953-kr/p/N82E16814487549',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080ti', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-ti-rtx-3080-ti-ventus-3x-12g-oc/p/N82E16814137651',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-ti-rtx-3080-ti-gaming-x-trio-12g/p/N82E16814137650',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-ti-rtx-3080-ti-ventus-3x-12g/p/N82E16814137656',
    },
  ]),
];
