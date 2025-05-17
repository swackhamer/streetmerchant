import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for proshop-no 3060ti series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3060ti', [
    {
      model: 'gaming x trio',
      url: 'https://www.proshop.no/2910054',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.proshop.no/2910052',
    },
    {
      model: 'ventus 2x oc',
      url: 'https://www.proshop.no/2911560',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3060ti', [
    {
      model: 'tuf oc',
      url: 'https://www.proshop.no/2886986',
    },
    {
      model: 'strix oc',
      url: 'https://www.proshop.no/2886982',
    },
    {
      model: 'dual',
      url: 'https://www.proshop.no/2886988',
    },
    {
      model: 'tuf',
      url: 'https://www.proshop.no/2886984',
    },
    {
      model: 'dual oc',
      url: 'https://www.proshop.no/2886990',
    },
    {
      model: 'dual mini',
      url: 'https://www.proshop.no/2914081',
    },
    {
      model: 'strix',
      url: 'https://www.proshop.no/2886980',
    },
    {
      model: 'dual mini oc',
      url: 'https://www.proshop.no/2914082',
    },
  ]),

  // Inno3d Cards
  ...createBrandSeriesLinks('inno3d', '3060ti', [
    {
      model: 'twin x2',
      url: 'https://www.proshop.no/2911556',
    },
    {
      model: 'ichill x3',
      url: 'https://www.proshop.no/2908274',
    },
    {
      model: 'twin x2 oc',
      url: 'https://www.proshop.no/2908273',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.proshop.no/2887734',
    },
    {
      model: 'eagle',
      url: 'https://www.proshop.no/2887735',
    },
    {
      model: 'gaming oc',
      url: 'https://www.proshop.no/2887737',
    },
    {
      model: 'gaming oc pro',
      url: 'https://www.proshop.no/2887738',
    },
    {
      model: 'eagle oc',
      url: 'https://www.proshop.no/2887736',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3060ti', [
    {
      model: 'twin edge',
      url: 'https://www.proshop.no/2914133',
    },
  ]),

];
