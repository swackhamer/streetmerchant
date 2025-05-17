import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for komplett-no 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.komplett.no/product/1168380/',
    },
    {
      model: 'suprim x',
      url: 'https://www.komplett.no/product/1173669',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.komplett.no/product/1168379/',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.komplett.no/product/1168439/',
    },
    {
      model: 'tuf',
      url: 'https://www.komplett.no/product/1168358/',
    },
    {
      model: 'strix oc',
      url: 'https://www.komplett.no/product/1168436/',
    },
    {
      model: 'strix oc',
      url: 'https://www.komplett.no/product/1176247/',
    },
    {
      model: 'strix',
      url: 'https://www.komplett.no/product/1176248/',
    },
    {
      model: 'ekwb',
      url: 'https://www.komplett.no/product/1174235/',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.komplett.no/product/1168419',
    },
    {
      model: 'vision oc',
      url: 'https://www.komplett.no/product/1171562',
    },
    {
      model: 'aorus master',
      url: 'https://www.komplett.no/product/1168418',
    },
    {
      model: 'eagle',
      url: 'https://www.komplett.no/product/1175718',
    },
    {
      model: 'eagle oc',
      url: 'https://www.komplett.no/product/1168415',
    },
    {
      model: 'aorus xtreme',
      url: 'https://www.komplett.no/product/1168416',
    },
    {
      model: 'aorus xtreme waterforce',
      url: 'https://www.komplett.no/product/1175704/',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3080', [
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1171801',
    },
    {
      model: 'phantom gs',
      url: 'https://www.komplett.no/product/1171798',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.komplett.no/product/1168422',
    },
    {
      model: 'phoenix',
      url: 'https://www.komplett.no/product/1168129',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.komplett.no/product/1168398',
    },
    {
      model: 'amp holo',
      url: 'https://www.komplett.no/product/1170425',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.komplett.no/product/1168128',
    },
    {
      model: 'gamerock',
      url: 'https://www.komplett.no/product/1171800/',
    },
    {
      model: 'gamerock oc',
      url: 'https://www.komplett.no/product/1171797/',
    },
  ]),

];
