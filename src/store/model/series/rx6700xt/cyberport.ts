import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for cyberport rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://www.cyberport.de?DEEP=2E07-A0A',
    },
    {
      model: 'strix oc',
      url: 'https://www.cyberport.de?DEEP=2E07-A08',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'aorus elite',
      url: 'https://www.cyberport.de?DEEP=2E21-326',
    },
    {
      model: 'eagle',
      url: 'https://www.cyberport.de?DEEP=2E21-324',
    },
    {
      model: 'gaming oc',
      url: 'https://www.cyberport.de?DEEP=2E21-325',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'gaming x',
      url: 'https://www.cyberport.de?DEEP=2E12-3FZ',
    },
    {
      model: 'mech 2x oc',
      url: 'https://www.cyberport.de?DEEP=2E12-3G0',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'pulse oc',
      url: 'https://www.cyberport.de?DEEP=2E01-7JQ',
    },
  ]),
];
