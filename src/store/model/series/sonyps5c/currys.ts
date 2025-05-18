import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for currys sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.currys.co.uk/gbuk/gaming/console-gaming/consoles/sony-playstation-5-825-gb-10203370-pdt.html',
    },
  ]),
];
