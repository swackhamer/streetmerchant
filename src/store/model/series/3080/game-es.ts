import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for game-es 3080 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3080', [
    {
      model: 'aorus master',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-MASTER-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184796',
    },
    {
      model: 'gaming oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-GAMING-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184792',
    },
    {
      model: 'vision oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AOURUS-GEFORCE-RTX-3080-VISION-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184797',
    },
    {
      model: 'eagle oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-EAGLE-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184791',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3080', [
    {
      model: 'gaming pro',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3080-GAMING-PRO-10GB-GDDR6X-TARJETA-GRAFICA/185006',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3080', [
    {
      model: 'gaming x trio',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX-3080-GAMING-X-TRIO-10G-TARJETA-GRAFICA-NVIDIA-GEFORCE-RTX-3080-10-GB-GDDR6X/V0P9YG',
    },
  ]),
];
