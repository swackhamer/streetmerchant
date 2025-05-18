import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for acompc ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-RYZEN-7-5800X-4.70GHZ-8-CORE-SKT-AM4-36MB-105W-WOF.html',
    },
  ]),
];
