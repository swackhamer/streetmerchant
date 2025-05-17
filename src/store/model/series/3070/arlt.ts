import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for arlt 3070 series
 */
export const links: Link[] = [
  // Asus Cards
  ...createBrandSeriesLinks('asus', '3070', [
    {
      model: 'dual',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-Dual-GeForce-RTX-3070.html',
    },
    {
      model: 'dual oc',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/ASUS-Dual-GeForce-RTX-3070-OC.html',
    },
    {
      model: 'tuf oc',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Grafikkarten/ASUS-TUF-Gaming-GeForce-RTX-3070-OC.html',
    },
    {
      model: 'strix',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3070/ASUS-ROG-Strix-GeForce-RTX-3070.html',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'ventus 2x oc',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/RTX-3070/MSI-GeForce-RTX-3070-Ventus-2X-OC.html',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3070', [
    {
      model: 'phoenix',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Grafikkarten/NVIDIA/GeForce-RTX/Gainward-GeForce-RTX-3070-Phoenix.html',
    },
    {
      model: 'phoenix gs',
      url: 'https://www.arlt.com/Gaming/Gaming-Hardware/Gainward-GeForce-RTX-3070-Phoenix-GS.html',
    },
  ]),

];
