import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for materiel 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.materiel.net/produit/202009220022.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.materiel.net/produit/202009220023.html',
    },
    {
      model: 'strix',
      url: 'https://www.materiel.net/produit/202009170013.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.materiel.net/produit/202009170012.html',
    },
    {
      model: 'strix oc white',
      url: 'https://www.materiel.net/produit/202101130115.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.materiel.net/produit/202009290076.html',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3070', [
    {
      model: 'ftw3',
      url: 'https://www.materiel.net/produit/202010210030.html',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.materiel.net/produit/202010210031.html',
    },
    {
      model: 'xc3 black',
      url: 'https://www.materiel.net/produit/202010210023.html',
    },
    {
      model: 'xc3',
      url: 'https://www.materiel.net/produit/202010210026.html',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.materiel.net/produit/202010210027.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phantom',
      url: 'https://www.materiel.net/produit/202010090025.html',
    },
    {
      model: 'phantom gs',
      url: 'https://www.materiel.net/produit/202010090024.html',
    },
    {
      model: 'phoenix',
      url: 'https://www.materiel.net/produit/202010090028.html',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.materiel.net/produit/202010090027.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'master',
      url: 'https://www.materiel.net/produit/202010200076.html',
    },
    {
      model: 'eagle',
      url: 'https://www.materiel.net/produit/202101050074.html',
    },
    {
      model: 'eagle oc',
      url: 'https://www.materiel.net/produit/202009290086.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.materiel.net/produit/202009290085.html',
    },
    {
      model: 'vision oc',
      url: 'https://www.materiel.net/produit/202010200077.html',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3070', [
    {
      model: 'ichill x3',
      url: 'https://www.materiel.net/produit/202010050072.html',
    },
    {
      model: 'ichill x4',
      url: 'https://www.materiel.net/produit/202010050071.html',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.materiel.net/produit/202010050078.html',
    },
  ]),

  // Kfa2 Cards
  ...createBrandSeriesLinks('kfa2', '3070', [
    {
      model: 'oc',
      url: 'https://www.materiel.net/produit/202011160124.html',
    },
    {
      model: 'ex oc',
      url: 'https://www.materiel.net/produit/202011160123.html',
    },
    {
      model: 'sg',
      url: 'https://www.materiel.net/produit/202009220060.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming trio',
      url: 'https://www.materiel.net/produit/202102220081.html',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.materiel.net/produit/202010010052.html',
    },
    {
      model: 'suprim',
      url: 'https://www.materiel.net/produit/202012070074.html',
    },
    {
      model: 'suprim x',
      url: 'https://www.materiel.net/produit/202011030097.html',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.materiel.net/produit/202102240027.html',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.materiel.net/produit/202010010051.html',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.materiel.net/produit/202102220079.html',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.materiel.net/produit/202010010050.html',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gamerock',
      url: 'https://www.materiel.net/produit/202010090017.html',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.materiel.net/produit/202010090016.html',
    },
    {
      model: 'gaming pro',
      url: 'https://www.materiel.net/produit/202010090023.html',
    },
    {
      model: 'gaming pro oc',
      url: 'https://www.materiel.net/produit/202010090022.html',
    },
    {
      model: 'jetstream',
      url: 'https://www.materiel.net/produit/202010090021.html',
    },
    {
      model: 'jetstream oc',
      url: 'https://www.materiel.net/produit/202010090019.html',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3070', [
    {
      model: 'uprising',
      url: 'https://www.materiel.net/produit/202009070042.html',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.materiel.net/produit/202009070043.html',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'amp holo',
      url: 'https://www.materiel.net/produit/202101120117.html',
    },
    {
      model: 'twin edge oc',
      url: 'https://www.materiel.net/produit/202009180082.html',
    },
    {
      model: 'twin edge oc white',
      url: 'https://www.materiel.net/produit/202012220093.html',
    },
  ]),
];
