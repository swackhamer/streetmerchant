import {Link} from '../store';
import {
  createLink,
  createBrandSeriesLinks,
  createFoundersEditionLinks,
} from '../common/link-factory';

/**
 * Links for saturn sonyps5de series
 */
export const links: Link[] = [
  // Sony Cards
  ...createBrandSeriesLinks('sony', 'sonyps5de', [
    {
      model: 'ps5 digital',
      url: 'https://www.saturn.de/de/product/-2661939.html',
    },
    {
      model: 'ps5 digital',
      url: 'https://www.saturn.de/de/product/_sony-playstation%C2%AE5-digital-edition-2661939.html',
    },
    {
      model: 'ps5 digital',
      url: 'https://www.saturn.de/de/product/_sony-playstation%C2%AE5-digital-edition-medienfernbedienung-2722423.html',
    },
  ]),
];
