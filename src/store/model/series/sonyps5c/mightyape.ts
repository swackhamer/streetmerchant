import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common';

/**
 * Links for mightyape sonyps5c series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5c', [
    {
      model: 'ps5 console',
      url: 'https://www.mightyape.co.nz/product/sony-playstation-5-console/31675007',
    },
  ]),
];
