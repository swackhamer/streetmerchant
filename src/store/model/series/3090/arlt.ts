import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for arlt 3090 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3090', [
    {
      model: 'tuf oc',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3090/ASUS-TUF-Gaming-GeForce-RTX-3090-OC.html',
    },
    {
      model: 'strix oc',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3090/ASUS-ROG-Strix-GeForce-RTX-3090-OC.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3090', [
    {
      model: 'phoenix gs',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Gainward-GeForce-RTX-3090-Phoenix-GS.html',
    },
  ]),
];
