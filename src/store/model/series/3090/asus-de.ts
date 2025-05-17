import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for asus-de 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'strix',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2826/asus-rog-strix-rtx3090-24g-gaming',
    },
    {
      model: 'strix oc',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2827/asus-rog-strix-rtx3090-o24g-gaming',
    },
    {
      model: 'tuf',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2822/asus-tuf-rtx3090-24g-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2823/asus-tuf-rtx3090-o24g-gaming',
    },
  ]),

];
