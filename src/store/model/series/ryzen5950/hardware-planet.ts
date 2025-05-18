import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for hardware-planet ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.hardware-planet.it/cpu-socket-am4/74422-vendita-cpu-socket-am4-amd-cpu-am4-ryzen-9-5950x-4900-ghz-wof-box-100-100000059wof-730143312745.html',
    },
  ]),
];
