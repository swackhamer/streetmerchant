import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for game-es 3060ti series
 */
export const links: Link[] = [
  // Gigabyte Cards
  ...createBrandSeriesLinks('gigabyte', '3060ti', [
    {
      model: 'aorus master',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AORUS-GEFORCE-RTX-3060TI-MASTER-8GB-DDR6X-TARJETA-GRAFICA/185822',
    },
  ]),
];
