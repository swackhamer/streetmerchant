import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for multicom 3090 series
 */
export const links: Link[] = [
  // Msi Cards
  ...createBrandSeriesLinks('msi', '3090', [
    {
      model: 'suprim x',
      url: 'https://www.multicom.no/business/msi-rtx-3090-suprim-x/cat-p/c100134/p1001541398',
    },
    {
      model: 'gaming x trio',
      url: 'https://www.multicom.no/business/msi-rtx-3090-gaming-x/cat-p/c100134/p1001455722',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.multicom.no/business/msi-geforce-rtx-3090-ventus/cat-p/c100134/p1001455723',
    },
  ]),

  // Evga Cards
  ...createBrandSeriesLinks('evga', '3090', [
    {
      model: 'ftw3',
      url: 'https://www.multicom.no/business/evga-geforce-rtx-3090-ftw3/cat-p/c100134/p1001453154',
    },
  ]),

  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'ekwb',
      url: 'https://www.multicom.no/business/asus-geforce-rtx-3090-ekwb/cat-p/c100134/p1001518225',
    },
    {
      model: 'strix white',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3090-o24g-white-oc-edition-grafikkort/cat-p/c100134/p1001547476',
    },
    {
      model: 'strix white',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3090-24g-white-grafikkort-gf-rtx/cat-p/c100134/p1001547477',
    },
    {
      model: 'strix',
      url: 'https://www.multicom.no/business/asus-rog-strix-rtx3090-24g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001453113',
    },
    {
      model: 'tuf oc',
      url: 'https://www.multicom.no/business/asus-tuf-rtx3090-o24g-gaming-grafikkort-gf-rtx/cat-p/c100134/p1001453114',
    },
  ]),

  // Pny Cards
  ...createBrandSeriesLinks('pny', '3090', [
    {
      model: 'xlr8 epic x',
      url: 'https://www.multicom.no/business/pny-xlr8-geforce-rtx-3090/cat-p/c100134/p1001454299',
    },
    {
      model: 'xlr8 epic x',
      url: 'https://www.multicom.no/business/pny-xlr8-geforce-rtx-3090/cat-p/c100134/p1001454298',
    },
  ]),
];
