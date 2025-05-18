import {Link} from '../store';
import {createLink, createBrandSeriesLinks, createFoundersEditionLinks} from '../common';

/**
 * Links for playstation sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817',
      itemNumber: '3005817',
    },
  ]),
];
