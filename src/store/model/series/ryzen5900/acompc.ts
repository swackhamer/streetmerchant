import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for acompc ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-Ryzen-9-5900X-AMD-Ryzen-9-Socket-AM4-PC-7nm-AMD-3-7-GHz-AM4.html',
    },
  ]),

];
