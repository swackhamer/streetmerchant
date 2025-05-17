import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for scorptec 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85443-rog-strix-rtx3080-10g-gaming',
    },
    {
      model: 'strix oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85382-rog-strix-rtx3080-o10g-gaming',
    },
    {
      model: 'tuf',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85076-tuf-rtx3080-10g-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85302-tuf-rtx3080-o10g-gaming',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85194-10g-p5-3895-kr',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85195-10g-p5-3897-kr',
    },
    {
      model: 'xc3 black',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85193-10g-p5-3881-kr',
    },
    {
      model: 'xc3',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85269-10g-p5-3883-kr',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85130-10g-p5-3885-kr',
    },
  ]),

  // Galax Cards
  ...createBrandSeriesLinks('galax', '3080', [
    {
      model: 'sg oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85142-38nwm3md99nn',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85046-gv-n3080gaming-oc-10gd',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85711-gv-n3080aorus-x-10gd',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/86435-gv-n3080aorusx-w-10gd',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/86434-gv-n3080aorusx-wb-10gd',
    },
    {
      model: 'eagle',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/86088-gv-n3080eagle-10gd',
    },
    {
      model: 'eagle oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85048-gv-n3080eagle-oc-10gd',
    },
    {
      model: 'aorus master',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85328-gv-n3080aorus-m-10gd',
    },
    {
      model: 'vision oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85329-gv-n3080vision-oc-10gd',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x4',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85334-c30804-106xx-1810va36',
    },
    {
      model: 'ichill x3',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85333-c30803-106xx-1810va37',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'suprim x',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/86640-geforce-rtx-3080-suprim-x-10g',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85147-geforce-rtx-3080-ventus-3x-10g-oc',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85146-geforce-rtx-3080-gaming-x-trio-10g',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/86188-zt-a30800f-10p',
    },
    {
      model: 'trinity',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85038-zt-a30800d-10p',
    },
    {
      model: 'trinity oc',
      url: 'https://www.scorptec.com.au/product/graphics-cards/nvidia/85326-zt-a30800j-10p',
    },
  ]),

];
