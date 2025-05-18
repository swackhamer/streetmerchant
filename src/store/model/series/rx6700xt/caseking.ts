import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for caseking rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://www.caseking.de/asus-radeon-rx-6700-xt-dual-12g-12288-mb-gddr6-gcas-453.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.caseking.de/asus-radeon-rx-6700-xt-tuf-o12g-12288-mb-gddr6-gcas-449.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.caseking.de/asus-radeon-rx-6700-xt-rog-strix-o12g-12288-mb-gddr6-gcas-448.html',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6700xt', [
    {
      model: 'amd reference',
      url: 'https://www.caseking.de/gigabyte-radeon-rx-6700-xt-12g-12288-mb-gddr6-gcgb-376.html',
    },
    {
      model: 'aorus elite',
      url: 'https://www.caseking.de/gigabyte-aorus-radeon-rx-6700-xt-elite-12g-12288-mb-gddr6-gcgb-377.html',
    },
    {
      model: 'eagle',
      url: 'https://www.caseking.de/gigabyte-radeon-rx-6700-xt-eagle-12g-12288-mb-gddr6-gcgb-375.html',
    },
    {
      model: 'gaming oc',
      url: 'https://www.caseking.de/gigabyte-radeon-rx-6700-xt-gaming-oc-12g-12288-mb-gddr6-gcgb-374.html',
    },
    {
      model: 'gaming x',
      url: 'https://www.caseking.de/msi-radeon-rx-6700-xt-gaming-x-12g-12288-mb-gddr6-gcmc-269.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6700xt', [
    {
      model: 'mech 2x',
      url: 'https://www.caseking.de/msi-radeon-rx-6700-xt-mech-2x-12g-12288-mb-gddr6-gcmc-271.html',
    },
    {
      model: 'mech 2x oc',
      url: 'https://www.caseking.de/msi-radeon-rx-6700-xt-mech-2x-12g-oc-12288-mb-gddr6-gcmc-270.html',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6700xt', [
    {
      model: 'nitro oc',
      url: 'https://www.caseking.de/sapphire-nitro-radeon-rx-6700-xt-gaming-oc-12g-12288-mb-gddr6-gcsp-219.html',
    },
    {
      model: 'pulse',
      url: 'https://www.caseking.de/sapphire-pulse-radeon-rx-6700-xt-gaming-12g-12288-mb-gddr6-gcsp-220.html',
    },
    {
      model: 'pulse oc',
      url: 'https://www.caseking.de/sapphire-pulse-radeon-rx-6700-xt-oc-12g-12288-mb-gddr6-gcsp-226.html',
    },
  ]),
];
