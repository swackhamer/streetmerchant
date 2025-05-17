import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for amazon-fr 3090 series
 */
export const links: Link[] = [
  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3090', [
    {
      model: 'trinity',
      url: 'https://www.amazon.fr/dp/B08HJQ182D',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.amazon.fr/dp/B08HR9D2JS',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3090', [
    {
      model: 'gaming oc',
      url: 'https://www.amazon.fr/dp/B08HJRF2CN',
    },
    {
      model: 'eagle oc',
      url: 'https://www.amazon.fr/dp/B08HJPDJTY',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf',
      url: 'https://www.amazon.fr/dp/B08HJGNJ81',
    },
    {
      model: 'tuf oc',
      url: 'https://www.amazon.fr/dp/B08HJLLF7G',
    },
  ]),

];
