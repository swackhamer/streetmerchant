import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for materiel 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.materiel.net/produit/202010140550.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.materiel.net/produit/202009090076.html',
    },
    {
      model: 'tuf',
      url: 'https://www.materiel.net/produit/202009010057.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.materiel.net/produit/202009030080.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.materiel.net/produit/202009090100.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.materiel.net/produit/202009090101.html',
    },
    {
      model: 'ftw3 ultra hybrid',
      url: 'https://www.materiel.net/produit/202012070098.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.materiel.net/produit/202009090098.html',
    },
    {
      model: 'xc3',
      url: 'https://www.materiel.net/produit/202009090099.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.materiel.net/produit/202009100088.html',
    },
    {
      model: 'xc3 ultra hybrid',
      url: 'https://www.materiel.net/produit/202012070099.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phantom',
      url: 'https://www.materiel.net/produit/202010260052.html',
    },
    {
      model: 'phantom gs',
      url: 'https://www.materiel.net/produit/202011090017.html',
    },
    {
      model: 'phoenix',
      url: 'https://www.materiel.net/produit/202009080104.html',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.materiel.net/produit/202009080103.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'master',
      url: 'https://www.materiel.net/produit/202009290084.html',
    },
    {
      model: 'xtreme',
      url: 'https://www.materiel.net/produit/202011060056.html',
    },
    {
      model: 'eagle',
      url: 'https://www.materiel.net/produit/202101050079.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.materiel.net/produit/202009080086.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.materiel.net/produit/202009080083.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.materiel.net/produit/202009300085.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3080', [
    {
      model: 'ichill x3',
      url: 'https://www.materiel.net/produit/202009030073.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.materiel.net/produit/202009030072.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.materiel.net/produit/202009030079.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3080', [
    {
      model: 'ex gamer',
      url: 'https://www.materiel.net/produit/202012080025.html',
    },
    {
      model: 'sg',
      url: 'https://www.materiel.net/produit/202009080052.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'x trio',
      url: 'https://www.materiel.net/produit/202009070052.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.materiel.net/produit/202010220025.html',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.materiel.net/produit/202009070053.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gamerock',
      url: 'https://www.materiel.net/produit/202010260054.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.materiel.net/produit/202010260053.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.materiel.net/produit/202009080100.html',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.materiel.net/produit/202009080099.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3080', [
    {
      model: 'epic x',
      url: 'https://www.materiel.net/produit/202009070040.html',
    },
    {
      model: 'epic x',
      url: 'https://www.materiel.net/produit/202009070041.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'amp holo',
      url: 'https://www.materiel.net/produit/202009180077.html',
    },
    {
      model: 'trinity',
      url: 'https://www.materiel.net/produit/202009030021.html',
    },
    {
      model: 'trinity oc',
      url: 'https://www.materiel.net/produit/202009180078.html',
    },
  ]),
];
