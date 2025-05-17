import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg-ca rx6900xt series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6900-xt-21308-01-20g/p/N82E16814202393',
    },
    {
      model: 'nitro+',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6900-xt-11308-01-20g/p/N82E16814202395',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6900-xt-rx6900xt-16g/p/N82E16814930051',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/gigabyte-radeon-rx-6900-xt-gv-r69xt-16gc-b/p/N82E16814932384',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/msi-radeon-rx-6900-xt-rx-6900-xt-16g/p/N82E16814137618',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/powercolor-radeon-rx-6900-xt-axrx-6900xt-16gbd6-m2dhc/p/N82E16814131774',
    },
  ]),

];
