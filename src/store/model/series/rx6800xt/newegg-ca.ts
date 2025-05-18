import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg-ca rx6800xt series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472',
    },
    {
      model: 'tuf oc',
      url: 'https://www.newegg.ca/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.ca/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049',
    },
    {
      model: 'taichi',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
    },
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388',
    },
    {
      model: 'nitro+ se',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390',
    },
    {
      model: 'nitro+',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'merc',
      url: 'https://www.newegg.ca/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800xt', [
    {
      model: 'red devil',
      url: 'https://www.newegg.ca/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767',
    },
  ]),
];
