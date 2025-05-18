import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for hardware-planet ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.hardware-planet.it/cpu-socket-am4/74745-vendita-cpu-socket-am4-amd-cpu-am4-ryzen-5-5600x-box-wraith-stealth-cooler-100-100000065box.html',
    },
  ]),
];
