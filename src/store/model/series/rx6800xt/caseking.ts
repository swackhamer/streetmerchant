import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for caseking rx6800xt series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'nitro oc se',
      url: 'https://www.caseking.de/sapphire-nitro-radeon-rx-6800-xt-oc-16g-16384-mb-gddr6-gcsp-215.html',
    },
    {
      model: 'nitro oc',
      url: 'https://www.caseking.de/sapphire-nitro-radeon-rx-6800-xt-oc-se-16g-16384-mb-gddr6-gcsp-214.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'gaming oc',
      url: 'https://www.caseking.de/gigabyte-radeon-rx-6800-xt-gaming-oc-16g-16384-mb-gddr6-gcgb-356.html',
    },
    {
      model: 'gaming',
      url: 'https://www.caseking.de/gigabyte-radeon-rx-6800-xt-16g-16384-mb-gddr6-gcgb-357.html',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'strix lc',
      url: 'https://www.caseking.de/asus-radeon-rx-6800-xt-rog-strix-lc-o16g-16384-mb-gddr6-gcas-416.html',
    },
    {
      model: 'tuf',
      url: 'https://www.caseking.de/asus-radeon-rx-6800-xt-tuf-o16g-16384-mb-gddr6-gcas-417.html',
    },
  ]),
];
