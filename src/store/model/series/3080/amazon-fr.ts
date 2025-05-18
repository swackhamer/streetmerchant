import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for amazon-fr 3080 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.amazon.fr/dp/B08HR7SV3M',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.fr/dp/B08HR5SXPS',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3080', [
    {
      model: 'ftw3',
      url: 'https://www.amazon.fr/dp/B08HGBYWQ6',
    },
    {
      model: 'ftw3 ultra',
      url: 'https://www.amazon.fr/dp/B08HR3Y5GQ',
    },
    {
      model: 'xc3 ultra',
      url: 'https://www.amazon.fr/dp/B08HR55YB5',
    },
    {
      model: 'xc3',
      url: 'https://www.amazon.fr/dp/B08HR4RJ3Q',
    },
    {
      model: 'xc3 black',
      url: 'https://www.amazon.fr/dp/B08HR6FMF3',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.fr/dp/B08HJTH61J',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.fr/dp/B08HJS2JLJ',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf',
      url: 'https://www.amazon.fr/dp/B08HHDP9DW',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.fr/dp/B08HH5WF97',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3080', [
    {
      model: 'trinity',
      url: 'https://www.amazon.fr/dp/B08HJNKT3P',
    },
  ]),
];
