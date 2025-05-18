import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg-sg rx6800 series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'pulse',
      url: 'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-11305-02-20g/p/N82E16814202394',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202394',
    },
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202389',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126473',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126478',
    },
    {
      model: 'strix',
      url: 'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126477',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930046',
    },
    {
      model: 'challenger',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930047',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930048',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932374',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137608',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800', [
    {
      model: 'red devil',
      url: 'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6800-axrx-6800-16gbd6-2dhce-oc/p/N82E16814131770',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131770',
    },
    {
      model: 'red dragon',
      url: 'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6800-axrx-6800-16gbd6-3dhr-oc/p/N82E16814131773',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131773',
    },
  ]),
];
