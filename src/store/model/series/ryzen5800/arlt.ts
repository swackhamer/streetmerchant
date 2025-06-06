import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for arlt ryzen5800 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5800', [
    {
      model: '5800x',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-7-5800X-boxed.html',
    },
  ]),
];
