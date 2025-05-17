import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for cyberport 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://www.cyberport.de?DEEP=2E07-51S',
    },
    {
      model: 'strix oc',
      url: 'https://www.cyberport.de?DEEP=2E07-51T',
    },
    {
      model: 'tuf',
      url: 'https://www.cyberport.de?DEEP=2E07-51L',
    },
    {
      model: 'tuf oc',
      url: 'https://www.cyberport.de?DEEP=2E07-51N',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.cyberport.de?DEEP=2E21-537',
    },
    {
      model: 'eagle oc',
      url: 'https://www.cyberport.de?DEEP=2E21-52Y',
    },
    {
      model: 'gaming oc',
      url: 'https://www.cyberport.de?DEEP=2E21-52Z',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.cyberport.de?DEEP=2E12-3L6',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.cyberport.de?DEEP=2E12-3L7c',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.cyberport.de?DEEP=2E13-1H4',
    },
    {
      model: 'trinity oc',
      url: 'https://www.cyberport.de?DEEP=2E13-1H7',
    },
  ]),

];
