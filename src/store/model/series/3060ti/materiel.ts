import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for materiel 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.materiel.net/produit/202011060098.html',
    },
    {
      model: 'dual mini',
      url: 'https://www.materiel.net/produit/202012210010.html',
    },
    {
      model: 'dual mini oc',
      url: 'https://www.materiel.net/produit/202012210009.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.materiel.net/produit/202011040097.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.materiel.net/produit/202011040047.html',
    },
    {
      model: 'tuf',
      url: 'https://www.materiel.net/produit/202011060096.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.materiel.net/produit/202011040046.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3060ti', [
    {
      model: 'ftw3 ultra',
      url: 'https://www.materiel.net/produit/202011240231.html',
    },
    {
      model: 'xc3',
      url: 'https://www.materiel.net/produit/202012070100.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060ti', [
    {
      model: 'ghost',
      url: 'https://www.materiel.net/produit/202011090107.html',
    },
    {
      model: 'ghost oc',
      url: 'https://www.materiel.net/produit/202011090108.html',
    },
    {
      model: 'phoenix',
      url: 'https://www.materiel.net/produit/202011090110.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.materiel.net/produit/202011180019.html',
    },
    {
      model: 'eagle',
      url: 'https://www.materiel.net/produit/202101050071.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.materiel.net/produit/202011180025.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.materiel.net/produit/202011180027.html',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.materiel.net/produit/202011180031.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.materiel.net/produit/202102010018.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060ti', [
    {
      model: 'ichill x3',
      url: 'https://www.materiel.net/produit/202011160037.html',
    },
    {
      model: 'twin x2',
      url: 'https://www.materiel.net/produit/202011300117.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.materiel.net/produit/202011160036.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3060ti', [
    {
      model: 'sg oc',
      url: 'https://www.materiel.net/produit/202011040084.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.materiel.net/produit/202101190017.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.materiel.net/produit/202012020119.html',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.materiel.net/produit/202102220080.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.materiel.net/produit/202011200140.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.materiel.net/produit/202011090106.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.materiel.net/produit/202011090105.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.materiel.net/produit/202011090099.html',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.materiel.net/produit/202011090098.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060ti', [
    {
      model: 'uprising',
      url: 'https://www.materiel.net/produit/202011090114.html',
    },
    {
      model: 'xlr8 revel',
      url: 'https://www.materiel.net/produit/202011090113.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://www.materiel.net/produit/202011060034.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.materiel.net/produit/202011060033.html',
    },
  ]),
];
