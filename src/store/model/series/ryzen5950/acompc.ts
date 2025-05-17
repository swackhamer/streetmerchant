import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for acompc ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-RYZEN-9-5950X-4.90GHZ-16-CORE-SKT-AM4-72MB-105W-WOF.html',
    },
  ]),

];
