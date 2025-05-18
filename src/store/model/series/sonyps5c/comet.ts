import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for comet sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.comet.it/ps5/sony-playstation-5',
      cartUrl: 'https://www.comet.it/cart/insert/PSX01802A/online',
    },
  ]),
];
