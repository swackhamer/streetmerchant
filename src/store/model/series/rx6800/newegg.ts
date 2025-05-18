import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg rx6800 series
 */
export const links: Link[] = [
  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800', [
    {
      model: 'pulse',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-11305-02-20g/p/N82E16814202394',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202394',
      itemNumber: '14-202-394',
    },
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-21305-01-20g/p/N82E16814202389',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202389',
      itemNumber: '14-202-389',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-rx6800-16g/p/N82E16814126473',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126473',
      itemNumber: '14-126-473',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-tuf-rx6800-o16g-gaming/p/N82E16814126478',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126478',
      itemNumber: '14-126-478',
    },
    {
      model: 'strix',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-rog-strix-rx6800-o16g-gaming/p/N82E16814126477',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126477',
      itemNumber: '14-126-477',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-rx-6800-16g/p/N82E16814930046',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930046',
      itemNumber: '14-930-046',
    },
    {
      model: 'challenger',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-rx6800-clp-16go/p/N82E16814930047',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930047',
      itemNumber: '14-930-047',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-rx6800-pgd-16go/p/N82E16814930048',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930048',
      itemNumber: '14-930-048',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-gv-r68-16gc-b/p/N82E16814932374',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932374',
      itemNumber: '14-932-374',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/msi-radeon-rx-6800-rx-6800-16g/p/N82E16814137608',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137608',
      itemNumber: '14-137-608',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800', [
    {
      model: 'red devil',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6800-axrx-6800-16gbd6-2dhce-oc/p/N82E16814131770',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131770',
      itemNumber: '14-131-770',
    },
    {
      model: 'red dragon',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6800-axrx-6800-16gbd6-3dhr-oc/p/N82E16814131773',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131773',
      itemNumber: '14-131-773',
    },
  ]),
];
