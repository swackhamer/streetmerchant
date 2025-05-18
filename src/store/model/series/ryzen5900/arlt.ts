import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for arlt ryzen5900 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5900', [
    {
      model: '5900x',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-9-5900X-boxed.html',
    },
  ]),
];
