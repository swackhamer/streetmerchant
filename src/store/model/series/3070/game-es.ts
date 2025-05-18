import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for game-es 3070 series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3070', [
    {
      model: 'gaming oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-GAMING-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184794',
    },
    {
      model: 'eagle oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-EAGLE-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184793',
    },
    {
      model: 'vision oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-VISION-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184795',
    },
  ]),

  // Zotac Cards
  ...createBrandSeriesLinks('zotac', '3070', [
    {
      model: 'twin edge oc white',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/ZOTAC-GAMING-GEFORCE-RTX-3070-TWIN-EDGE-OC-WHITE-EDITION-NVIDIA-8-GB-GDDR6/V0PBLE',
    },
  ]),

  // Palit Cards
  ...createBrandSeriesLinks('palit', '3070', [
    {
      model: 'gaming pro',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3070-GAMING-PRO-8GB-GDDR6-TARJETA-GRAFICA/185005',
    },
  ]),

  // Msi Cards
  ...createBrandSeriesLinks('msi', '3070', [
    {
      model: 'gaming x trio',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX3070-GAMING-X-TRIO-NVIDIA-GEFORCE-RTX-3070-8-GB-GDDR6/V0PA1K',
    },
    {
      model: 'ventus 3x oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX3070-VENTUS-3X-OC-NVIDIA-GEFORCE-RTX-3070-8-GB-GDDR6/V0PA1J',
    },
  ]),
];
