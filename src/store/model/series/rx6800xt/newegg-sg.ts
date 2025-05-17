import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg-sg rx6800xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932373',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/global/sg-en/gigabyte-radeon-rx-6800-xt-gv-r68xtgaming-oc-16gd/p/N82E16814932381',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932381',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137607',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202388',
    },
    {
      model: 'nitro+',
      url: 'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202391',
    },
    {
      model: 'nitro+ se',
      url: 'https://www.newegg.com/global/sg-en/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202390',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930045',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930049',
    },
    {
      model: 'taichi',
      url: 'https://www.newegg.com/global/sg-en/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930050',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126472',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126476',
    },
    {
      model: 'strix lc',
      url: 'https://www.newegg.com/global/sg-en/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126475',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'merc',
      url: 'https://www.newegg.com/global/sg-en/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150844',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800xt', [
    {
      model: 'red devil',
      url: 'https://www.newegg.com/global/sg-en/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131767',
    },
  ]),

];
