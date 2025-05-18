import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for arlt 3080 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3080', [
    {
      model: 'tuf oc',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/ASUS-TUF-Gaming-GeForce-RTX-3080-OC.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'ventus 3x oc',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3080/MSI-GeForce-RTX-3080-Ventus-3X-OC.html',
    },
  ]),
];
