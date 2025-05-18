import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg-sg rx6900xt series
 */
export const links: Link[] = [
  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6900-xt-rx6900xt-16g/p/N82E16814930051',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930051',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx6900xt-pgd-16g/p/N82E16814930052',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930052',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6900-xt-gv-r69xt-16gc-b/p/N82E16814932384',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932384',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/msi-radeon-rx-6900-xt-rx-6900-xt-16g/p/N82E16814137618',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137618',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6900-xt-axrx-6900xt-16gbd6-m2dhc/p/N82E16814131774',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131774',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6900xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6900-xt-21308-01-20g/p/N82E16814202393',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202393',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6900xt', [
    {
      model: 'merc',
      url: 'https://www.newegg.com/global/sg-en/xfx-radeon-rx-6900-xt-rx-69xtacud9/p/N82E16814150846',
      cartUrl:
        'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150846',
    },
  ]),
];
