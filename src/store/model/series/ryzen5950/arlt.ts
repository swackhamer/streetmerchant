import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common/link-factory';

/**
 * Links for arlt ryzen5950 series
 */
export const links: Link[] = [
  // Amd Cards
  ...createBrandSeriesLinks('amd', 'ryzen5950', [
    {
      model: '5950x',
      url: 'https://www.arlt.com/Hardware/PC-Komponenten/Prozessoren-arlt/AMD-Ryzen-9-5950X-boxed.html',
    },
  ]),

];
