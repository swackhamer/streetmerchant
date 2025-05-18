import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for wellstechnology 3080 series
 */
export const links: Link[] = [
  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'xc3',
      url: 'https://wellstechnology.com.au/products/evga-geforce-rtx3080-xc3-10gb-gddr6x?_pos=1&_sid=bcf224e44&_ss=r&variant=36272043983014',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://wellstechnology.com.au/products/evga-geforce-rtx3080-ftw3-ultra-10gb-gddr6x?_pos=2&_sid=bcf224e44&_ss=r&variant=36271898919078',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://wellstechnology.com.au/products/gigabyte-n3080gaming-oc-10gd-rtx3080-video-card?_pos=3&_sid=bcf224e44&_ss=r&variant=36210887295142',
    },
    {
      model: 'aorus xtreme waterforce wb',
      url: 'https://wellstechnology.com.au/products/gigabyte-aorus-rtx3080-xtreme-waterforce-wb?_pos=1&_sid=fd83b064b&_ss=r',
    },
  ]),
];
