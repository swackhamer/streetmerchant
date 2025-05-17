import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for newegg rx6800xt series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xt-16gc-b/p/N82E16814932373',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932373',
      itemNumber: '14-932-373',
    },
    {
      model: 'gaming oc',
      url: 'https://www.newegg.com/gigabyte-radeon-rx-6800-xt-gv-r68xtgaming-oc-16gd/p/N82E16814932381',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814932381',
      itemNumber: '14-932-381',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/msi-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814137607',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814137607',
      itemNumber: '14-137-607',
    },
  ]),

  // Sapphire Cards
  ...createBrandSeriesLinks('sapphire', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-xt-21304-01-20g/p/N82E16814202388',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202388',
      itemNumber: '14-202-388',
    },
    {
      model: 'nitro+',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-xt-11304-02-20g/p/N82E16814202391',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202391',
      itemNumber: '14-202-391',
    },
    {
      model: 'nitro+ se',
      url: 'https://www.newegg.com/sapphire-radeon-rx-6800-xt-11304-01-20g/p/N82E16814202390',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814202390',
      itemNumber: '14-202-390',
    },
  ]),

  // Asrock Cards
  ...createBrandSeriesLinks('asrock', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx-6800-xt-16g/p/N82E16814930045',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930045',
      itemNumber: '14-930-045',
    },
    {
      model: 'phantom gaming',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx6800xt-pgd-16go/p/N82E16814930049',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930049',
      itemNumber: '14-930-049',
    },
    {
      model: 'taichi',
      url: 'https://www.newegg.com/asrock-radeon-rx-6800-xt-rx6800xt-tcx-16go/p/N82E16814930050',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814930050',
      itemNumber: '14-930-050',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6800xt', [
    {
      model: 'amd reference',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-xt-rx6800xt-16g/p/N82E16814126472',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126472',
      itemNumber: '14-126-472',
    },
    {
      model: 'tuf',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-xt-tuf-rx6800xt-o16g-gaming/p/N82E16814126476',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126476',
      itemNumber: '14-126-476',
    },
    {
      model: 'strix lc',
      url: 'https://www.newegg.com/asus-radeon-rx-6800-xt-rog-strix-lc-rx6800xt-o16g-gaming/p/N82E16814126475',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814126475',
      itemNumber: '14-126-475',
    },
  ]),

  // Xfx Cards
  ...createBrandSeriesLinks('xfx', 'rx6800xt', [
    {
      model: 'merc',
      url: 'https://www.newegg.com/xfx-radeon-rx-6800-xt-rx-68xtacbd9/p/N82E16814150844',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814150844',
      itemNumber: '14-150-844',
    },
  ]),

  // Powercolor Cards
  ...createBrandSeriesLinks('powercolor', 'rx6800xt', [
    {
      model: 'red devil',
      url: 'https://www.newegg.com/powercolor-radeon-rx-6800-xt-axrx-6800xt-16gbd6-2dhce-oc/p/N82E16814131767',
      cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16814131767',
      itemNumber: '14-131-767',
    },
  ]),

];
