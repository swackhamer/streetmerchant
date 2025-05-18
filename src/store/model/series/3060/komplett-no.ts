import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for komplett-no 3060 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060', [
    {
      model: 'tuf oc',
      url: 'https://www.komplett.no/product/1178869/',
    },
    {
      model: 'strix oc',
      url: 'https://www.komplett.no/product/1178866/',
    },
    {
      model: 'strix',
      url: 'https://www.komplett.no/product/1178867/',
    },
    {
      model: 'tuf',
      url: 'https://www.komplett.no/product/1178870/',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060', [
    {
      model: 'gaming x trio',
      url: 'https://www.komplett.no/product/1179439/',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.komplett.no/product/1179437/',
    },
    {
      model: 'ventus 2x',
      url: 'https://www.komplett.no/product/1179436/',
    },
    {
      model: 'ventus 3x',
      url: 'https://www.komplett.no/product/1179440/',
    },
    {
      model: 'gaming x',
      url: 'https://www.komplett.no/product/1179438/',
    },
    {
      model: 'dual',
      url: 'https://www.komplett.no/product/1179340/',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060', [
    {
      model: 'twin edge',
      url: 'https://www.komplett.no/product/1178552/',
    },
    {
      model: 'amp holo',
      url: 'https://www.komplett.no/product/1178553/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'gaming oc',
      url: 'https://www.komplett.no/product/1180868/',
    },
    {
      model: 'eagle oc',
      url: 'https://www.komplett.no/product/1180869/',
    },
    {
      model: 'aorus master',
      url: 'https://www.komplett.no/product/1182236/',
    },
    {
      model: 'eagle',
      url: 'https://www.komplett.no/product/1180870/',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3060', [
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1180406/',
    },
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1180407/',
    },
    {
      model: 'dual oc',
      url: 'https://www.komplett.no/product/1180408/',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060', [
    {
      model: 'phoenix',
      url: 'https://www.komplett.no/product/1180411/',
    },
    {
      model: 'phoenix',
      url: 'https://www.komplett.no/product/1180413/',
    },
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1180412/',
    },
  ]),
];
