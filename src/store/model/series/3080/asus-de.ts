import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for asus-de 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'strix',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2828/asus-rog-strix-rtx3080-10g-gaming',
    },
    {
      model: 'strix oc',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2829/asus-rog-strix-rtx3080-o10g-gaming',
    },
    {
      model: 'tuf',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2824/asus-tuf-rtx3080-10g-gaming',
    },
    {
      model: 'tuf oc',
      url: 'https://webshop.asus.com/de/komponenten/grafikkarten/nvidia-serie/2825/asus-tuf-rtx3080-o10g-gaming',
    },
  ]),
];
