import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for komplett-no 3060ti series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'strix oc',
      url: 'https://www.komplett.no/product/1174210/',
    },
    {
      model: 'tuf oc',
      url: 'https://www.komplett.no/product/1174206/',
    },
    {
      model: 'dual oc',
      url: 'https://www.komplett.no/product/1174211/',
    },
    {
      model: 'dual oc',
      url: 'https://www.komplett.no/product/1177556/',
    },
    {
      model: 'dual',
      url: 'https://www.komplett.no/product/1177557/',
    },
    {
      model: 'strix',
      url: 'https://www.komplett.no/product/1174208/',
    },
    {
      model: 'tuf',
      url: 'https://www.komplett.no/product/1174209/',
    },
    {
      model: 'dual',
      url: 'https://www.komplett.no/product/1174207/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x',
      url: 'https://www.komplett.no/product/1178723/',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.komplett.no/product/1175541/',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.komplett.no/product/1176385/',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.komplett.no/product/1175535/',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060ti', [
    {
      model: 'phoenix gs',
      url: 'https://www.komplett.no/product/1174392/',
    },
    {
      model: 'ghost oc',
      url: 'https://www.komplett.no/product/1174403/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.komplett.no/product/1174509/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.komplett.no/product/1174508/',
    },
    {
      model: 'gaming oc',
      url: 'https://www.komplett.no/product/1174511/',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.komplett.no/product/1174510/',
    },
    {
      model: 'eagle',
      url: 'https://www.komplett.no/product/1174512/',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge oc',
      url: 'https://www.komplett.no/product/1174275/',
    },
    {
      model: 'twin edge',
      url: 'https://www.komplett.no/product/1174276/',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060ti', [
    {
      model: 'dual',
      url: 'https://www.komplett.no/product/1174401/',
    },
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1174395/',
    },
    {
      model: 'dual oc',
      url: 'https://www.komplett.no/product/1174394/',
    },
  ]),
];
