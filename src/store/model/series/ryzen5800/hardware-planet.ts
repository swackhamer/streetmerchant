import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for hardware-planet ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.hardware-planet.it/cpu-socket-am4/74421-vendita-cpu-socket-am4-amd-cpu-am4-ryzen-7-5800x-4700ghz-wof-box-100-100000063wof-730143312714.html/',
    },
  ]),

];
