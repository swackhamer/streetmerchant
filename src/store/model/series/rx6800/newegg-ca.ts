import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg-ca rx6800 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473',
    },
    {
      model: 'strix oc',
      url: 'https://www.newegg.ca/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477',
    },
    {
      model: 'tuf oc',
      url: 'https://www.newegg.ca/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046',
    },
    {
      model: 'challenger',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.ca/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389',
    },
    {
      model: 'nitro+',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6800-11305-01-20g/p/N82E16814202392',
    },
  ]),

];
