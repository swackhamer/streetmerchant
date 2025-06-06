import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for newegg-ca 3070 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-2x-oc/p/N82E16814137602',
      itemNumber: '14-137-602',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-2x/p/N82E16814137605',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-3x-oc/p/N82E16814137601',
      itemNumber: '14-137-601',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-gaming-x-trio/p/N82E16814137603',
      itemNumber: '14-137-603',
    },
    {
      model: 'suprim x',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-suprim-x-8g/p/N82E16814137620',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-8g/p/N82E16814126460',
      itemNumber: '14-126-460',
    },
    {
      model: 'dual oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-o8g/p/N82E16814126459',
      itemNumber: '14-126-459',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-gaming/p/N82E16814126458',
      itemNumber: '14-126-458',
    },
    {
      model: 'ko',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-ko-rtx3070-o8g-gamin/p/N82E16814126466',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-tuf-rtx3070-o8g-gaming/p/N82E16814126461',
      itemNumber: '14-126-461',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932342',
      itemNumber: '14-932-342',
    },
    {
      model: 'eagle',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-8gd/p/N82E16814932344',
      itemNumber: '14-932-344',
    },
    {
      model: 'vision oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932360',
      itemNumber: '14-932-360',
    },
    {
      model: 'aorus master',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932359',
      itemNumber: '14-932-359',
    },
    {
      model: 'eagle oc',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932343',
      itemNumber: '14-932-343',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700e-10p/p/N82E16814500501',
      itemNumber: '14-500-501',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700h-10p/p/N82E16814500505',
      itemNumber: '14-500-505',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'xc3 black',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3751-kr/p/N82E16814487528',
      itemNumber: '14-487-528',
    },
    {
      model: 'ftw3',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3765-kr/p/N82E16814487531',
      itemNumber: '14-487-531',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3755-kr/p/N82E16814487530',
      itemNumber: '14-487-530',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3767-kr/p/N82E16814487532',
      itemNumber: '14-487-532',
    },
    {
      model: 'xc3',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3753-kr/p/N82E16814487529',
      itemNumber: '14-487-529',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'uprising',
      url: 'https://www.newegg.ca/pny-geforce-rtx-3070-vcg30708dfmpb/p/N82E16814133812',
      itemNumber: '14-133-812',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.newegg.ca/pny-geforce-rtx-3070-vcg30708tfxppb/p/N82E16814133811',
      itemNumber: '14-133-811',
    },
  ]),
];
