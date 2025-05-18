import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for game-es 3060 series
 */
export const links: Link[] = [
  // Pny Cards
  ...createBrandSeriesLinks('pny', '3060', [
    {
      model: 'xlr8 revel epic x',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AORUS-GEFORCE-RTX-3060TI-MASTER-8GB-DDR6X-TARJETA-GRAFICA/185822',
    },
    {
      model: 'uprising',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PNY-GEFORCE-RTX3060-12GB-UPRISING-DUAL-FAN-EDITION-TARJETA-GRAFICA-GAMING/V0Q1DK',
    },
  ]),

  // Gainward Cards
  ...createBrandSeriesLinks('gainward', '3060', [
    {
      model: 'ghost',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GAINWARD-GEFORCE-RTX-3060-GHOST-12GB-TARJETA-GRAFICA-GAMING/188176',
    },
  ]),

  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060', [
    {
      model: 'vision oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3060-WINDFORCE-VISION-OC-12GB-GDDR6-RGB-TARJETA-GRAFICA-GAMING/187676',
    },
    {
      model: 'gaming oc',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3060-WINDFORCE-GAMING-OC-12GB-GDDR6-RGB-TARJETA-GRAFICA-GAMING/187675',
    },
  ]),
];
