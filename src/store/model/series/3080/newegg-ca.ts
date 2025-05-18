import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for newegg-ca 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453',
      itemNumber: '14-126-453',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-gaming/p/N82E16814126457',
      itemNumber: '14-126-457',
    },
    {
      model: 'tuf oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming/p/N82E16814126452',
      itemNumber: '14-126-452',
    },
    {
      model: 'strix white',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-rog-strix-rtx3080-o10g-white/p/N82E16814126483',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3895-kr/p/N82E16814487519',
      itemNumber: '14-487-519',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518',
      itemNumber: '14-487-518',
    },
    {
      model: 'xc3 black',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522',
      itemNumber: '14-487-522',
    },
    {
      model: 'xc3',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521',
      itemNumber: '14-487-521',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520',
      itemNumber: '14-487-520',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600',
      itemNumber: '14-137-600',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598',
      itemNumber: '14-137-598',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-gaming-x-trio-10g/p/N82E16814137597',
      itemNumber: '14-137-597',
    },
    {
      model: 'suprim x',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx3080-suprim-x-10g/p/N82E16814137609',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080gaming-oc-10gd/p/N82E16814932329',
      itemNumber: '149-32-329',
    },
    {
      model: 'eagle oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080eagle-oc-10gd/p/N82E16814932330',
      itemNumber: '149-32-330',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080eagle-10gd/p/N82E16814932367',
    },
    {
      model: 'aorus master',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-10gd/p/N82E16814932336',
      itemNumber: '14-932-336',
    },
    {
      model: 'vision oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080vision-oc-10gd/p/N82E16814932337',
      itemNumber: '14-932-337',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3080-zt-a30800d-10p/p/N82E16814500502',
      itemNumber: '14-950-502',
    },
    {
      model: 'trinity oc',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3080-zt-t30800j-10p/p/N82E16814500504',
      itemNumber: '14-500-504',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'xlr8 revel',
      url: 'https://www.newegg.ca/pny-geforce-rtx-3080-vcg308010tfxppb/p/N82E16814133809',
      itemNumber: '14-133-809',
    },
  ]),
];
