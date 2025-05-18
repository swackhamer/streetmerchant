import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for acompc ryzen5600 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5600', [
    {
      model: '5600x',
      url: 'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-RYZEN-5-5600X-4.60GHZ-6-CORE-SKT-AM4-35MB-65W-PIB.html',
    },
  ]),
];
