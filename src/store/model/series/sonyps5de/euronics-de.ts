import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for euronics-de sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-digital-edition-konsole-4061856837833',
    },
  ]),
];
