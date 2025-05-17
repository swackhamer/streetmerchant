import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';
import {createAmdReferenceLinks} from '../../common/link-factory-amd';

/**
 * Links for asus-de rx6700xt series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', 'rx6700xt', [
    {
      model: 'dual',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/dual-series/3104/asus-dual-rx6700xt-12g',
    },
    {
      model: 'strix oc',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/rog-serie/3106/asus-rog-strix-rx6700xt-o12g-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/tuf-247-betrieb/3105/asus-tuf-rx6700xt-o12g-gaming',
    },
  ]),

];
